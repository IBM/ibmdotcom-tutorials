from crewai.tools import BaseTool
from my_retail_advisor.tools.tool_helper import Helper


class VisionTool(BaseTool):
    name: str = "Vision Tool"
    description: str = "Analyzes a default picture to collect visual data and caption."
    

    def _run(self) -> str:
        # Path to the shelf.png image relative to the current working directory
        image_path = 'images/shelf.jpg'
        # Simulating image-to-text conversion
        products_in_image = Helper.image2text(image_path)
        return products_in_image

# # Activate it to include imag epath as argument
# class ImagePromptSchema(BaseModel):
#     """Input for Vision Tool."""
#     image_path_url: str = "The image path or URL."

# class VisionTool(BaseTool):
#     name: str = "Vision Tool"
#     description: str = "Analyzes a default picture to collect visual data and caption."
#     # Activate it to include imag epath as argument
#     args_schema: Type[BaseModel] = ImagePromptSchema

#     def _run(self, client, image_path_url: str) -> str:
#          # Simulating image-to-text conversion
#         products_in_image = Helper.image2text(image_path)
#         return products_in_image
