"use strict";(self.webpackChunk_kentcdodds_react_fundamentals=self.webpackChunk_kentcdodds_react_fundamentals||[]).push([[338],{7338:function(e,n,t){t.r(n),n.default='\x3c!-- Creating custom components --\x3e\n\x3c!-- \ud83d\udcaf Runtime validation with PropTypes --\x3e\n\x3c!-- http://localhost:3000/isolated/final/04.extra-3.html --\x3e\n\n<body>\n  <div id="root"></div>\n  <script src="https://unpkg.com/react@18.1.0/umd/react.development.js"><\/script>\n  <script src="https://unpkg.com/react-dom@18.1.0/umd/react-dom.development.js"><\/script>\n  <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"><\/script>\n  <script type="text/babel">\n    const PropTypes = {\n      string(props, propName, componentName) {\n        if (typeof props[propName] !== \'string\') {\n          return new Error(\n            `Hey, the component ${componentName} needs the prop ${propName} to be a string, but a ${typeof props[\n              propName\n            ]} was passed`,\n          )\n        }\n      },\n    }\n\n    function Message({subject, greeting}) {\n      return (\n        <div className="message">\n          {greeting}, {subject}\n        </div>\n      )\n    }\n\n    Message.propTypes = {\n      subject: PropTypes.string,\n      greeting: PropTypes.string,\n    }\n\n    const element = (\n      <div className="container">\n        <Message subject="World" greeting="Hello" />\n        <Message subject="World" greeting="Goodbye" />\n      </div>\n    )\n\n    ReactDOM.createRoot(document.getElementById(\'root\')).render(element)\n  <\/script>\n</body>\n'}}]);
//# sourceMappingURL=338.8c7faae0.chunk.js.map