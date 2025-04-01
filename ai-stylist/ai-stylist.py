import streamlit as st
import pandas as pd
import json
from src.images import describe_images, base64_load_images 
from src.watsonx import generate_outfit

st.set_page_config(page_title="Styli.AI", page_icon="ai-stylist-icon.png")
hide_decoration_bar_style = '''<style>header {visibility: hidden;}</style>'''
st.markdown(hide_decoration_bar_style, unsafe_allow_html=True)
hide_streamlit_footer = """<style>#MainMenu {visibility: hidden;}
                        footer {visibility: hidden;}</style>"""
st.markdown(hide_streamlit_footer, unsafe_allow_html=True)

col1, col2 = st.columns([20, 4])
with col1:
    st.title('Styli.AI')
    st.markdown("Where AI meets fashion design. Powered by [IBM®  Granite™](%s)." % "https://www.ibm.com/granite")

with col2:
    st.image('ai-stylist-icon.png')

st.markdown("### What's in your closet?")

st.file_uploader(
    "Upload the images of your clothing items", 
    accept_multiple_files=True,
    type=['png','jpeg'],
    key='uploaded_files',
)

st.markdown("##### Where are you headed?")

occasions = ["Casual","Formal"]
st.segmented_control(
    "Select occasion type", occasions, selection_mode="single", key="occasion"
)

times_of_day = ["Morning","Afternoon","Evening"]
st.segmented_control(
    "Select time of day", times_of_day, selection_mode="single", key="time_of_day"
)

seasons = ["Winter", "Spring", "Summer", "Fall"]
st.segmented_control(
    "Select season of the year", seasons, selection_mode="single", key="season"
)

st.text_input(label="Location", placeholder="E.g. coffee shop", disabled=False, key="location")

def start_stylist():
    with st.spinner("Working on it..."):
        images = base64_load_images(st.session_state['uploaded_files']) 
        image_descriptions = describe_images(images)
        
        # Add filenames to the image descriptions
        for i, desc in enumerate(image_descriptions):
            desc_dict = json.loads(desc)
            desc_dict['filename'] = st.session_state['uploaded_files'][i].name
            image_descriptions[i] = json.dumps(desc_dict)
        
        outfit = generate_outfit(
            image_descriptions=image_descriptions, 
            occasion=st.session_state['occasion'], 
            location=st.session_state['location'], 
            time_of_day=st.session_state["time_of_day"],
            season=st.session_state["season"]
        )
        closet = [json.loads(js) for js in image_descriptions]

    st.success("Done!")
    return outfit, closet

def check_valid_input() -> bool:
    #check whether user is missing any input
    required_vars = {'occasion':st.session_state['occasion'], 
                     'location':st.session_state['location'],
                     'time of day':st.session_state['time_of_day'],
                     'season':st.session_state['season']}
    missing_vars = [name for name, value in required_vars.items() if not value]
    if len(missing_vars)>0:
        st.error(f"Missing the following input: {', '.join(missing_vars)}", icon="🚨")
        return False
    else:
        return True

if st.button('Generate outfit') and check_valid_input():
    outfit, closet = start_stylist()  
    st.write(outfit if outfit else 'Error generating outfit. Please try again.')
    st.markdown("### The contents of your closet:")
    st.dataframe(pd.DataFrame(closet), use_container_width=True)
    
    # Display images and details of items in the outfit
    if outfit:
        st.markdown("### Selected Items:")
        selected_items = []
        
        # Collect selected items and their corresponding files
        for item, uploaded_file in zip(closet, st.session_state['uploaded_files']):
            if item['filename'].lower() in outfit.lower() and not any(key['filename'] == item['filename'] for key in selected_items):
                selected_items.append({
                    'image': uploaded_file,
                    'category': item['category'],
                    'filename': item['filename']
                })
        
        # Create columns for the selected items
        if len(selected_items) > 0:
            cols = st.columns(len(selected_items))
            for col, item in zip(cols, selected_items):
                with col:
                    st.image(item['image'], caption=f"{item['category']}\n{item['filename']}")