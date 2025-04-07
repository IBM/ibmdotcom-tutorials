# import pytest
# from langgraph_react_agent.tools import get_arxiv_contents

# class MockLoader:
#     def __init__(self, mock_html):
#         self.mock_html = mock_html

#     def load(self):
#         return self.mock_html

# class MockPageContent:
#     def __init__(self, page_content):
#         self.page_content = page_content

# class MockTransformer:
#     def transform_documents(self, html_content):
#         return [MockPageContent("Transformed content from the HTML")]

# @pytest.mark.parametrize("url, mock_html, expected_output", [
#     ("https://arxiv.org/html/2501.12948v1", "<html>Content here</html>", "Transformed content from the HTML"),
#     ("https://arxiv.org/html/2501.12948v1", None, "Content not available"),
#     ("https://arxiv.org/other/1234", "", "The URL to an arXiv research paper, must be in format 'https://arxiv.org/html/2501.12948v1'"),
# ])

# class TestTools:
#     def test_get_arxiv_contents(self, monkeypatch, url, mock_html, expected_output):
#         def mock_loader(url):
#             return MockLoader(mock_html)

#         def mock_transformer():
#             return MockTransformer()

#         monkeypatch.setattr("langgraph_react_agent.tools.AsyncHtmlLoader", mock_loader)
#         monkeypatch.setattr("langgraph_react_agent.tools.MarkdownifyTransformer", mock_transformer)

#         result = get_arxiv_contents(url)
        
#         assert result == expected_output
