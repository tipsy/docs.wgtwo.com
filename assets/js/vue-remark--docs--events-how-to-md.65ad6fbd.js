(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{210:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},241:function(e,t,o){"use strict";o.r(t);var n=o(5),r=o(210),s=o(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:r.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===a(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:o[e]=function(){return i[e]}}))},c=s.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",p={excerpt:null,title:"Listen for events",topic:"events",type:"how-to",codeEvents:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/events/src/main/kotlin/GetEvents.kt",codeEventsManualAcks:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/events/src/main/kotlin/GetEventsManualAck.kt"};var d=function(e){e.options[u]&&(e.options[u]=p),s.a.util.defineReactive(e.options,u,p),e.options.computed=c.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},f=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"how-to-listen-for-events"}},[o("a",{attrs:{href:"#how-to-listen-for-events","aria-hidden":"true"}},[e._v("#")]),e._v("How to listen for Events")]),o("h2",{attrs:{id:"overview"}},[o("a",{attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v("Overview")]),o("p",[e._v("To listen for events, you will need to:")]),o("ul",[o("li",[o("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Get credentials from Console")])]),o("li",[e._v("Write client code that connects to our message broker")])]),o("h2",{attrs:{id:"prerequisites"}},[o("a",{attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v("Prerequisites")]),o("h3",{attrs:{id:"tokencredentials"}},[o("a",{attrs:{href:"#tokencredentials","aria-hidden":"true"}},[e._v("#")]),e._v("Token/credentials")]),o("ul",[o("li",[e._v("You will need "),o("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("credentials from Console")]),e._v(" for the type of event you're interested in.\nYou will only receive an event if your token has the appropriate right.")])]),o("h3",{attrs:{id:"install-dependencies"}},[o("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v("Install dependencies")]),o("JitpackDependency"),o("p",[e._v("Then you can add "),o("code",{pre:!0},[e._v("event-grpc")]),e._v(" and "),o("code",{pre:!0},[e._v("utils-grpc")]),e._v(": ")]),o("ClientDependencies",{attrs:{clients:["events-grpc","utils-grpc"]}}),o("h2",{attrs:{id:"listen-for-events"}},[o("a",{attrs:{href:"#listen-for-events","aria-hidden":"true"}},[e._v("#")]),e._v("Listen for events")]),o("GithubCode",{attrs:{to:e.$frontmatter.codeEvents}}),o("h2",{attrs:{id:"manual-acknowledge"}},[o("a",{attrs:{href:"#manual-acknowledge","aria-hidden":"true"}},[e._v("#")]),e._v("Manual acknowledge")]),o("p",[e._v("In the below example we enable manual acknowledgement, and setting a custom ack timeout.")]),o("p",[e._v("Include Google's Protocol Buffers utility library for support of Google's Well-Known Types:\n"),o("ClientDependencies",{attrs:{clients:["protobuf-java-util"]}})],1),o("GithubCode",{attrs:{to:e.$frontmatter.codeEventsManualAcks}}),o("h2",{attrs:{id:"concepts"}},[o("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[e._v("#")]),e._v("Concepts")]),o("ul",[o("li",[o("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Three types of stubs: asynchronous, blocking, and future")])]),o("li",[o("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof l&&l(f),"function"==typeof d&&d(f);t.default=f.exports}}]);