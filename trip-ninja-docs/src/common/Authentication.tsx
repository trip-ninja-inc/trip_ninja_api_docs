import React from "react";
import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";


export default function Authentication() {

  const authExample = `
    import base64
    auth = base64.b64encode("USERNAME:PASSWORD")
    headers = {"authorization": "Basic "+ auth}
    response = requests.post(url, headers=headers, data=json.dumps(payload))
  `

  return(
    <div>
      <h3>Authentication</h3>
      <p>
        Trip Ninja uses Basic Authentication standards. To authenticate, simply encode your API username 
        and password string using base64 and pass it to all authorization headers. The following example 
        shows how this can be done. Note: in the example, the payload and API endpoint URL are not shown.
      </p>
      <p className="subtitle">Python Example:</p>
      <CodeBlock
          language={"python"}
          text={authExample}
          theme={tomorrowNightBlue}
          wrapLines={true}
          showLineNumbers={false}
          codeBlock
        />
    </div>
  );
}
