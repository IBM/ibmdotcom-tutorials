Version 0.1.4
-------------
- unified response and request schemas with the watsonx.ai Chat API https://cloud.ibm.com/apidocs/watsonx-ai#text-chat,
- added support for passing a system prompt during invocation.

Version 0.1.3
-------------
- added support for streaming interactions, enhancing real-time capabilities,
- the ReAct agent now includes a system prompt for more flexible behavior,
- updated the repository visualization in the README to highlight only the most important files,
- enhanced `examples/query_existing_deployment.py` to support interactive usage,
- the `thread_id` can now be set directly via `config.toml` for easier customization,
- the AI service now returns the entire current state. For interactive chats, this behavior can be suppressed by disabling the verbose flag in the configuration,
- `deployment_id` removed from the `config.toml`. It should be passed directly in `examples/query_existing_deployment.py`.

Version 0.1.2
-------------
Addressed general feedback received on the template:

- changed template name to `langgraph-react-agent`,
- enhanced documentation, mainly added more links and elaborated on some aspects (like credential management), 
- added a possibility to keep the conversation going with the WatsonxChat after asking the first question,
- WatsonxChat now should remember previous conversations (within same deployment).

Version 0.1.1
-------------
- enhanced logging in scripts,
- restructured template files' hierarchy -- it's recommended now to define your graph implementation in `src/*/agent.py` file,
- the script for testing the ai-service function locally is now much more interactive allowing to choose from multiple exemplary questions and datasets,
- small fixes to code and docs.

Version 0.1.0
-------------

Initial release