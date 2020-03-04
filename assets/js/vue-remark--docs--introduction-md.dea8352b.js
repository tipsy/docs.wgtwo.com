(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{210:function(t,n,s){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},243:function(t,n,s){"use strict";s.r(n);var a=s(5),e=s(210),o=s(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o.a.config.optionMergeStrategies;var p={VueRemarkRoot:e.a},c=function(t){var n=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===r(p[t])&&"function"==typeof p[t].render?n[t]=p[t]:s[t]=function(){return p[t]}}))},u=o.a.config.optionMergeStrategies,i="__vueRemarkFrontMatter",v={excerpt:null,title:"Introduction",topic:"introduction",type:"explanation"};var l=function(t){t.options[i]&&(t.options[i]=v),o.a.util.defineReactive(t.options,i,v),t.options.computed=u.computed({$frontmatter:function(){return t.options[i]}},t.options.computed)},_=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("VueRemarkRoot",[s("h1",{attrs:{id:"working-group-two-apis"}},[s("a",{attrs:{href:"#working-group-two-apis","aria-hidden":"true"}},[t._v("#")]),t._v("Working Group Two APIs")]),s("p",[t._v("Our APIs are hosted at "),s("a",{attrs:{href:"https://api.wgtwo.com",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://api.wgtwo.com")])]),s("h2",{attrs:{id:"resources"}},[s("a",{attrs:{href:"#resources","aria-hidden":"true"}},[t._v("#")]),t._v("Resources")]),s("table",[s("thead",[s("tr",[s("th"),s("th")])]),s("tbody",[s("tr",[s("td",[t._v("protobufs")]),s("td",[s("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis/tree/master/wgtwo",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("github.com/working-group-two/wgtwoapis › wgtwo")])])]),s("tr",[s("td",[t._v("OpenAPI")]),s("td",[s("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis/tree/master/openapi",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("github.com/working-group-two/wgtwoapis › openapi")])])])])]),s("p",[t._v("Sample CLI  app written in Kotlin: "),s("a",{attrs:{href:"https://github.com/working-group-two/wgtwo-kotlin-code-snippets",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("wgtwo-kotlin-code-snippets")])]),s("h2",{attrs:{id:"credentials"}},[s("a",{attrs:{href:"#credentials","aria-hidden":"true"}},[t._v("#")]),t._v("Credentials")]),s("p",[t._v("API keys are managed via "),s("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://console.wgtwo.com")])]),s("h2",{attrs:{id:"dependency"}},[s("a",{attrs:{href:"#dependency","aria-hidden":"true"}},[t._v("#")]),t._v("Dependency")]),s("p",[t._v("Working Group Two's public API can be found at "),s("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://github.com/working-group-two/wgtwoapis")])]),s("JitpackDependency"),s("h2",{attrs:{id:"grpc"}},[s("a",{attrs:{href:"#grpc","aria-hidden":"true"}},[t._v("#")]),t._v("gRPC")]),s("h3",{attrs:{id:"well-known-types"}},[s("a",{attrs:{href:"#well-known-types","aria-hidden":"true"}},[t._v("#")]),t._v("Well-Known Types")]),s("p",[t._v("We do use "),s("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/reference/google.protobuf",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Google's Well-Known Types")]),t._v(" in our gRPC APIs.")]),s("p",[t._v("They may be managed using the following dependency:\n"),s("ClientDependencies",{attrs:{clients:["protobuf-java-util"]}})],1),s("h4",{attrs:{id:"examples"}},[s("a",{attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v("Examples")]),s("h5",{attrs:{id:"create-a-duration-protobuf-message"}},[s("a",{attrs:{href:"#create-a-duration-protobuf-message","aria-hidden":"true"}},[t._v("#")]),t._v("Create a Duration protobuf message")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",{pre:!0,attrs:{class:"language-kotlin"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" timeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protobuf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Durations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("h5",{attrs:{id:"extension-methods-for-converting-to-and-from-javatime"}},[s("a",{attrs:{href:"#extension-methods-for-converting-to-and-from-javatime","aria-hidden":"true"}},[t._v("#")]),t._v("Extension methods for converting to and from java.time")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",{pre:!0,attrs:{class:"language-kotlin"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protobuf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Timestamp\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protobuf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Durations\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protobuf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Timestamps\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Instant\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protobuf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toJavaDuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofNanos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Durations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toNanos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toProtobufDuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Durations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromNanos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toNanos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" Instant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toProtoTimeStamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Timestamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Timestamps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromMillis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toEpochMilli")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" Timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toInstant")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Instant "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Instant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofEpochMilli")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Timestamps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toMillis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("h3",{attrs:{id:"phone-numbers"}},[s("a",{attrs:{href:"#phone-numbers","aria-hidden":"true"}},[t._v("#")]),t._v("Phone Numbers")]),s("p",[t._v("All APIs using "),s("code",{pre:!0},[t._v("wgtwo.common.v0.PhoneNumber")]),t._v(" expects a phone number formatted as E.164 with a leading plus sign.")]),s("p",[t._v("You may include the following dependency to manage this:\n"),s("ClientDependencies",{attrs:{clients:["phonenumber-utils"]}})],1),s("h4",{attrs:{id:"example"}},[s("a",{attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v("Example")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",{pre:!0,attrs:{class:"language-kotlin"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i18n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phonenumbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Phonenumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumber\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phonenumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumbers\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" PhoneNumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPhoneNumberProto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PhoneNumbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPhoneNumberProto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" phoneNumber"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PhoneNumber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PhoneNumbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+47 xxx xx xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserTokensProto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ListUserTokenRequest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UserTokensProto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ListUserTokenRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPhoneNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("phoneNumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPhoneNumberProto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof l&&l(_);n.default=_.exports}}]);