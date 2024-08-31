import{_ as c,r as n,o as a,c as s,a as e,b as o,d,e as i}from"./app-ltPCiGOj.js";const l={},r=i('<h1 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h1><blockquote><p>The version update history of <code>BetterAndroid</code> is recorded here.</p></blockquote><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>We will only maintain the latest dependencies, if you are using outdate dependencies, you voluntarily renounce any possibility of maintenance.</p></div><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>To avoid translation time consumption, Changelog will use <strong>Google Translation</strong> from <strong>Chinese</strong> to <strong>English</strong>, please refer to the original text for actual reference.</p><p>Time zone of version release date: <strong>UTC+8</strong></p></div><h2 id="ui-component" tabindex="-1"><a class="header-anchor" href="#ui-component" aria-hidden="true">#</a> ui-component</h2>',5),h={id:"_1-0-5-2024-03-08",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_1-0-5-2024-03-08","aria-hidden":"true"},"#",-1),u=i("<ul><li>Removed <code>Factory</code> suffix from all extension method <code>kt</code> files</li><li>Removed deprecated files in the previous version</li><li>Fixed the problem of incorrect subscripts and item positions returned by <code>onItemViewsClick</code> and <code>onItemViewsLongClick</code> in <code>CommonAdapterBuilder</code></li><li>Adjust the entry record object added in the adapter to <code>LinkedHashSet</code> to prevent repeated additions</li><li>Open <code>DEFAULT_VIEW_TYPE</code> in <code>RecyclerAdapterBuilder</code></li><li>Added <code>onBindItemId</code> method in the adapter to customize the behavior of <code>getItemId</code></li><li>The adapter now allows direct use of <code>onBindViews</code> to bind item layouts without callbacks</li><li>Added <code>onBindHeaderView</code> and <code>onBindFooterView</code> methods in <code>RecyclerAdapterBuilder</code></li><li>If the <code>trigger</code> method is called in <code>OnBackPressedCallback</code> and is not removed, the callback event will be re-enabled</li></ul>",1),p={id:"_1-0-4-2024-01-02",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#_1-0-4-2024-01-02","aria-hidden":"true"},"#",-1),_=i("<ul><li><code>SystemBarsController</code> has been fully migrated to window insets API, please refer to the documentation to start using the new usage</li><li>Reconstructed <code>SystemBarsController</code> and modified the initialization method, please refer to the documentation to get started using the new method</li><li>Window insets has been completely separated from the system bars into <code>WindowInsetsWrapper</code>, <code>InsetsWrapper</code>, <code>InsetsFactory</code></li><li>Deprecated all related usages of window insets in the system bars, please start using the new window insets API now</li><li>Reconstructed <code>BackPressedController</code> and connected it to <code>BackPressedDispatcher</code>, please refer to the documentation to start using the new usage</li><li><code>AppViewsFragment</code> adds a new loading layout method using the constructor method to pass in <code>layoutResId</code></li><li>Renamed <code>RecyclerCosmeticMaccker</code> to <code>RecyclerCosmetic</code> and made related functions generic</li><li>Opened preset decorators for <code>RecyclerView</code>, now you can create them manually</li><li>Refactored a lot of functions related to adapters. Now you can create them manually using the method of the same name for each adapter (<code>BaseAdapter</code> is <code>CommonAdapter</code>)</li><li>Reconstructed notification related functions, please refer to the documentation to start using the new usage</li><li>Renamed and modified some other functions</li></ul>",1),g={id:"_1-0-3-2023-12-03",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#_1-0-3-2023-12-03","aria-hidden":"true"},"#",-1),w=i("<ul><li>The <code>init</code> method of <code>SystemBarsController</code> adds the <code>defaultPaddings</code> parameter, which can configure whether to automatically add the corresponding system bars padding during initialization</li><li>When using the <code>show</code> or <code>hide</code> method in <code>SystemBarsController</code>, it will automatically determine whether the system bars padding has been added to determine whether to add the corresponding padding</li><li>Added <code>AppComponentActivity</code>, inherited from <code>ComponentActivity</code>, applicable to Jetpack Compose without setting AppCompat theme</li><li>When using <code>AppBindingActivity</code>, <code>AppViewsActivity</code>, <code>AppComponentActivity</code>, the added layout background color will be automatically filled into the parent layout</li></ul>",1),x={id:"_1-0-2-2023-11-24",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_1-0-2-2023-11-24","aria-hidden":"true"},"#",-1),v=i("<ul><li>Refactor the System Insets function in <code>SystemBarsController</code> to fix the problem that the maximum layout size cannot be calculated on Compose View</li><li>Added <code>SystemInsets.Paddings</code> and <code>setBaseBackgroundResource</code>, <code>isVisible</code> functions to <code>SystemBarsController</code></li><li><code>SystemBarsView</code> is obsolete, please start using the new way to customize the System Insets function</li><li>Added <code>View.applySystemInsets</code>, <code>View.appendSystemInsets</code>, <code>View.removeSystemInsets</code> methods</li></ul>",1),F={id:"_1-0-1-2023-11-18",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#_1-0-1-2023-11-18","aria-hidden":"true"},"#",-1),C=e("ul",null,[e("li",null,[o("Fix the loading exception catching problem in "),e("code",null,"SystemBarsController")])],-1),B={id:"_1-0-0-2023-11-02",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#_1-0-0-2023-11-02","aria-hidden":"true"},"#",-1),R=e("ul",null,[e("li",null,"The first version is submitted to Maven")],-1),S=e("h2",{id:"ui-extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ui-extension","aria-hidden":"true"},"#"),o(" ui-extension")],-1),I={id:"_1-0-4-2024-05-05",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_1-0-4-2024-05-05","aria-hidden":"true"},"#",-1),T=i("<ul><li>Integrate the parameters of the entry and exit animation methods in the <code>Fragment</code> extension</li><li>Remove the default transition animation in the <code>Fragment</code> extension and delete the related resource files</li><li>Added the <code>Fragment.viewBinding</code> method in the <code>ViewBinding</code> extension</li><li>Fix the problem that the layout inflate by <code>viewBinding</code> in the <code>ViewBinding</code> extension will not be automatically cached</li><li>Fix the problem that the <code>inflate</code> method in the <code>ViewBinding</code> extension cannot be loaded correctly when encountering <code>&lt;merge&gt;</code> and <code>&lt;include&gt;</code> type layouts</li><li>Adjust the <code>inflate</code> method in the <code>ViewBinding</code> extension to ignore the <code>attachToParent</code> parameter when encountering <code>&lt;merge&gt;</code> and <code>&lt;include&gt;</code> type layouts</li><li>Remove all deprecated methods in the old version of the <code>ViewBinding</code> extension</li></ul>",1),P={id:"_1-0-3-2024-03-08",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#_1-0-3-2024-03-08","aria-hidden":"true"},"#",-1),M=i("<ul><li>Removed <code>Factory</code> suffix from all extension method <code>kt</code> files</li><li>Removed deprecated files in the previous version</li><li>The <code>ViewLayoutParams</code> method of <code>ViewFactory</code> now supports the <code>AbsListView.LayoutParams</code> type</li><li>Added <code>updateCompoundDrawables</code> and <code>updateCompoundDrawablesWithIntrinsicBounds</code> methods in <code>ViewFactory</code></li><li>Added <code>parent</code> and <code>parentOrNull</code> methods in <code>ViewFactory</code></li><li>Added <code>walkToRoot</code>, <code>walkThroughChildren</code>, <code>indexOfInParent</code> methods in <code>ViewFactory</code></li><li>Added <code>child</code>, <code>childOrNull</code>, <code>firstChild</code>, <code>lastChild</code>, <code>firstChildOrNull</code>, <code>lastChildOrNull</code> methods in <code>ViewFactory</code></li><li>Merge the <code>inflate</code> method in <code>ViewFactory</code> into <code>LayoutInflaterFactory</code> and deprecated the original method</li><li>Added <code>addToBackStack</code> parameter to the add methods in <code>FragmentFactory</code></li><li>The <code>commitTransaction</code> method is deprecated in <code>FragmentFactory</code> and is now migrate to the official <code>fragment-ktx</code> dependency</li><li>Added <code>themeResId</code> method in <code>ResourcesFactory</code></li><li>Added new <code>ViewBinding</code> solution and deprecated the old solution</li></ul>",1),W={id:"_1-0-2-2024-01-02",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#_1-0-2-2024-01-02","aria-hidden":"true"},"#",-1),L=i("<ul><li>Some package names that are not classified according to the standard have been moved, if you encounter an error, please re-import these calling methods</li><li>Modified related names for Java calls</li><li>Added <code>updatePadding</code> method in <code>ViewFactory</code> that can set horizontal and vertical directions</li><li>The <code>inflate</code> method in <code>ViewFactory</code> will automatically use <code>Activity.getLayoutInflater</code></li><li>Renamed <code>ColorsFactory</code> to <code>ColorFactory</code></li><li>Renamed <code>toMixColor</code> in <code>ColorFactory</code> to <code>mixColorOf</code></li><li>Some methods in <code>ColorFactory</code> will now no longer throw exceptions</li><li>Added <code>GradientDrawableCompat</code>, you can use it to create <code>GradientDrawable</code> for versions below Android 10</li><li>Added <code>updatePadding</code> method in <code>DrawableFactory</code> that can set horizontal and vertical directions</li><li><code>asDp</code>, <code>asPx</code> and its usage in <code>DimensionFactory</code> are obsolete because of its design error, and are now connected to the new usage <code>toDp</code>, <code>toPx</code></li><li>Added <code>DisplayDensity</code>, you can easily use <code>dp</code>, <code>px</code> to convert units</li><li>Deprecated <code>getDimensionPx</code> in <code>ResourcesFactory</code>, please use <code>toPx</code> to calculate manually</li><li>Deprecated <code>isSpecialWindowingMode</code> in <code>ResourcesFactory</code> and <code>ActivityFactory</code>, please do not use it again</li><li>Added <code>getFontCompat</code> method in <code>ResourcesFactory</code></li><li>Fix the usage error of <code>commt</code> related functions in <code>FragmentFactory</code></li><li>A large number of related usages in <code>FragmentFactory</code> have been modified, now please refer to the documentation to start using the new usages</li><li>Added <code>compressBitmap</code> method in <code>BitmapFactory</code></li><li>Added <code>Window.toast</code> method in <code>ToastFactory</code></li><li>The <code>toast</code> method in <code>ToastFactory</code> has a new <code>allowBackgroud</code> parameter, you can now allow <code>Toast</code> to show in non-main threads</li><li>Some methods in <code>WindowFactory</code> will now no longer throw exceptions</li><li>A new method in <code>WindowFactory</code> can be used to set the screen brightness using the <code>Float</code> type</li><li>Use <code>WindowInsetsController</code> in <code>ViewFactory</code> to show or hide the input method and rename the methods to <code>showIme</code>, <code>hideIme</code></li><li>Deprecated <code>ViewLayoutParam</code> class, please use the <code>ViewLayoutParams</code> method instead</li><li>Added <code>duration</code> parameter to <code>performKeyPressed</code> in <code>ViewFactory</code></li><li>Added <code>updateMargin</code> method in <code>ViewFactory</code> that can set horizontal and vertical directions</li><li>Methods in <code>ActivityFactory</code> were <code>inline</code> processed</li><li>Added each <code>startActivityOrElse</code> method in <code>ActivityFactory</code></li><li>The <code>round</code> method in <code>BimapFactory</code> now supports setting the corner radius in each direction</li></ul>",1),N={id:"_1-0-1-2023-11-18-1",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#_1-0-1-2023-11-18-1","aria-hidden":"true"},"#",-1),E=e("ul",null,[e("li",null,[o("Fix the problem of incorrect return value of "),e("code",null,"getColor"),o(" and "),e("code",null,"getColorStateList"),o(" methods in ResourcesFactory")])],-1),j={id:"_1-0-0-2023-11-02-1",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#_1-0-0-2023-11-02-1","aria-hidden":"true"},"#",-1),q=e("ul",null,[e("li",null,"The first version is submitted to Maven")],-1),H=e("h2",{id:"system-extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#system-extension","aria-hidden":"true"},"#"),o(" system-extension")],-1),K={id:"_1-0-1-2024-01-02",tabindex:"-1"},U=e("a",{class:"header-anchor",href:"#_1-0-1-2024-01-02","aria-hidden":"true"},"#",-1),J=i("<ul><li>Renamed some incorrectly named methods in <code>SystemVersion</code></li><li>Added <code>name</code> attribute in <code>SystemVersion</code></li><li>Caching <code>SystemKind</code> detection results to prevent repeated creation of reflection objects</li><li>Deprecated <code>get</code> in <code>SystemKind</code>, now please use the <code>current</code> property to get the current system type.</li><li>Renamed some incorrectly named methods and classes in <code>ApplicationFactoy</code></li><li>Removed <code>FLAG</code> prefix in <code>AplicationInfoFlagsWrapper</code></li><li>Modified the related usage in <code>BroadcastFactory</code>, now please refer to the documentation to use the new usage to create runtime broadcasts</li><li>Modified the relevant usage in <code>ClipboardFactory</code>, now please refer to the document to use the new usage to use the clipboard function</li><li>Methods in <code>ServiceFactory</code> were <code>inline</code> processed</li><li>Added <code>startServiceOrElse</code> and <code>startForegroundServiceOrElse</code> methods in <code>ServiceFactory</code></li></ul>",1),Y={id:"_1-0-0-2023-11-02-2",tabindex:"-1"},Q=e("a",{class:"header-anchor",href:"#_1-0-0-2023-11-02-2","aria-hidden":"true"},"#",-1),X=e("ul",null,[e("li",null,"The first version is submitted to Maven")],-1),Z=e("h2",{id:"permission-extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#permission-extension","aria-hidden":"true"},"#"),o(" permission-extension")],-1),$=e("p",null,"Not yet released.",-1),ee=e("h2",{id:"compose-extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compose-extension","aria-hidden":"true"},"#"),o(" compose-extension")],-1),oe={id:"_1-0-2-2024-01-16",tabindex:"-1"},te=e("a",{class:"header-anchor",href:"#_1-0-2-2024-01-16","aria-hidden":"true"},"#",-1),de=i("<ul><li>Added <code>HapticFeedback</code> method, you can set it to any click or touch event</li><li><code>ComponentPadding</code> adds a <code>None</code> method, you can use it to directly get <code>ComponentPadding(0.dp)</code></li><li>Modified <code>onDismissRequest</code> in <code>Dialog</code> to make it mandatory to exist, matching the usage in the official <code>foundation</code></li><li>Optimize some code styles</li></ul>",1),ie={id:"_1-0-1-2024-01-08",tabindex:"-1"},ce=e("a",{class:"header-anchor",href:"#_1-0-1-2024-01-08","aria-hidden":"true"},"#",-1),ne=e("ul",null,[e("li",null,[o("Removed some useless "),e("code",null,"@Stable"),o(" annotations")]),e("li",null,[o("Added "),e("code",null,"borderOrElse"),o(" method with the same name and new usage")]),e("li",null,[o("Added "),e("code",null,"AdaptiveRow"),o(", "),e("code",null,"AdaptiveColumn")])],-1),ae={id:"_1-0-0-2024-01-02",tabindex:"-1"},se=e("a",{class:"header-anchor",href:"#_1-0-0-2024-01-02","aria-hidden":"true"},"#",-1),le=e("ul",null,[e("li",null,"The first version is submitted to Maven")],-1),re=e("h2",{id:"compose-multiplatform",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compose-multiplatform","aria-hidden":"true"},"#"),o(" compose-multiplatform")],-1),he={id:"_0-1-0-2024-01-02",tabindex:"-1"},me=e("a",{class:"header-anchor",href:"#_0-1-0-2024-01-02","aria-hidden":"true"},"#",-1),ue=e("ul",null,[e("li",null,"The first version is submitted to Maven")],-1);function pe(ye,_e){const t=n("Badge");return a(),s("div",null,[r,e("h3",h,[m,o(" 1.0.5 | 2024.03.08  "),d(t,{type:"tip",text:"latest",vertical:"middle"})]),u,e("h3",p,[y,o(" 1.0.4 | 2024.01.02  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),_,e("h3",g,[f,o(" 1.0.3 | 2023.12.03  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),w,e("h3",x,[b,o(" 1.0.2 | 2023.11.24  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),v,e("h3",F,[A,o(" 1.0.1 | 2023.11.18  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),C,e("h3",B,[V,o(" 1.0.0 | 2023.11.02  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),R,S,e("h3",I,[k,o(" 1.0.4 | 2024.05.05  "),d(t,{type:"tip",text:"latest",vertical:"middle"})]),T,e("h3",P,[D,o(" 1.0.3 | 2024.03.08  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),M,e("h3",W,[O,o(" 1.0.2 | 2024.01.02  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),L,e("h3",N,[z,o(" 1.0.1 | 2023.11.18  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),E,e("h3",j,[G,o(" 1.0.0 | 2023.11.02  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),q,H,e("h3",K,[U,o(" 1.0.1 | 2024.01.02  "),d(t,{type:"tip",text:"latest",vertical:"middle"})]),J,e("h3",Y,[Q,o(" 1.0.0 | 2023.11.02  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),X,Z,$,ee,e("h3",oe,[te,o(" 1.0.2 | 2024.01.16  "),d(t,{type:"tip",text:"latest",vertical:"middle"})]),de,e("h3",ie,[ce,o(" 1.0.1 | 2024.01.08  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),ne,e("h3",ae,[se,o(" 1.0.0 | 2024.01.02  "),d(t,{type:"warning",text:"stale",vertical:"middle"})]),le,re,e("h3",he,[me,o(" 0.1.0 | 2024.01.02  "),d(t,{type:"tip",text:"latest",vertical:"middle"})]),ue])}const fe=c(l,[["render",pe],["__file","changelog.html.vue"]]);export{fe as default};
