import{_ as t,r as l,o as a,c as n,a as e,b as o,d as c,e as i}from"./app-ltPCiGOj.js";const r={},s=i('<h1 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h1><blockquote><p>这里记录了 <code>BetterAndroid</code> 的版本更新历史。</p></blockquote><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>我们只会对最新的依赖进行维护，若你正在使用过时的依赖则代表你自愿放弃一切维护的可能性。</p></div><h2 id="ui-component" tabindex="-1"><a class="header-anchor" href="#ui-component" aria-hidden="true">#</a> ui-component</h2>',4),h={id:"_1-0-5-2024-03-08",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_1-0-5-2024-03-08","aria-hidden":"true"},"#",-1),u=i("<ul><li>移除了所有扩展方法 <code>kt</code> 文件的 <code>Factory</code> 后缀</li><li>移除了上一个版本中已作废的文件</li><li>修复 <code>CommonAdapterBuilder</code> 中的 <code>onItemViewsClick</code>、<code>onItemViewsLongClick</code> 返回的下标和条目位置错误问题</li><li>调整适配器中添加的条目记录对象为 <code>LinkedHashSet</code> 以防止重复添加</li><li>开放 <code>RecyclerAdapterBuilder</code> 中的 <code>DEFAULT_VIEW_TYPE</code></li><li>适配器中新增 <code>onBindItemId</code> 方法，可自定义 <code>getItemId</code> 的行为</li><li>适配器中现在允许无回调直接使用 <code>onBindViews</code> 绑定条目布局</li><li><code>RecyclerAdapterBuilder</code> 中新增 <code>onBindHeaderView</code>、<code>onBindFooterView</code> 方法</li><li>在 <code>OnBackPressedCallback</code> 中调用 <code>trigger</code> 方法后若未移除则将重新启用此回调事件</li></ul>",1),m={id:"_1-0-4-2024-01-02",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_1-0-4-2024-01-02","aria-hidden":"true"},"#",-1),y=i("<ul><li><code>SystemBarsController</code> 已完全迁移到 Window Insets API，请参考文档开始使用新用法</li><li>重构了 <code>SystemBarsController</code> 并修改了初始化方法，请参考文档使用新的方式开始使用</li><li>Window Insets 已从系统栏中完全分离为 <code>WindowInsetsWrapper</code>、<code>InsetsWrapper</code>、<code>InsetsFactory</code></li><li>作废了全部有关系统栏中的 Window Insets 相关用法，现在请开始使用全新的 Window Insets API</li><li>重构了 <code>BackPressedController</code> 并对接到 <code>BackPressedDispatcher</code>，请参考文档开始使用新用法</li><li><code>AppViewsFragment</code> 新增使用构造方法传入 <code>layoutResId</code> 的装载布局方式</li><li>更名 <code>RecyclerCosmeticMacker</code> 为 <code>RecyclerCosmetic</code> 并对相关功能进行了泛型处理</li><li>开放了 <code>RecyclerView</code> 的预置装饰器，现在你可以手动创建它们</li><li>重构了大量有关适配器的功能，现在你可以使用每个适配器的同名方法手动进行创建 (<code>BaseAdapter</code> 为 <code>CommonAdapter</code>)</li><li>重构了通知相关功能，请参考文档开始使用新用法</li><li>进行了一些其它功能的更名和修改</li></ul>",1),w={id:"_1-0-3-2023-12-03",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_1-0-3-2023-12-03","aria-hidden":"true"},"#",-1),x=i("<ul><li><code>SystemBarsController</code> 的 <code>init</code> 方法新增 <code>defaultPaddings</code> 参数，可以配置初始化时是否自动添加对应的系统栏边距</li><li>在 <code>SystemBarsController</code> 中使用 <code>show</code> 或 <code>hide</code> 方法时将自动判断是否已经添加系统栏边距来决定是否添加对应的边距</li><li>新增 <code>AppComponentActivity</code>，继承于 <code>ComponentActivity</code>，可适用于 Jetpack Compose，无需设置 AppCompat 主题</li><li>使用 <code>AppBindingActivity</code>、<code>AppViewsActivity</code>、<code>AppComponentActivity</code> 时会自动将添加的布局背景颜色填充到父布局</li></ul>",1),F={id:"_1-0-2-2023-11-24",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#_1-0-2-2023-11-24","aria-hidden":"true"},"#",-1),v=i("<ul><li>重构 <code>SystemBarsController</code> 中的 System Insets 功能修复在 Compose View 上无法计算布局最大尺寸问题</li><li><code>SystemBarsController</code> 中新增 <code>SystemInsets.Paddings</code> 和 <code>setBaseBackgroundResource</code>、<code>isVisible</code> 功能</li><li>作废了 <code>SystemBarsView</code>，请开始使用新的方式自定义 System Insets 功能</li><li>新增 <code>View.applySystemInsets</code>、<code>View.appendSystemInsets</code>、<code>View.removeSystemInsets</code> 方法</li></ul>",1),C={id:"_1-0-1-2023-11-18",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#_1-0-1-2023-11-18","aria-hidden":"true"},"#",-1),V=e("ul",null,[e("li",null,[o("修复 "),e("code",null,"SystemBarsController"),o(" 中存在的装载异常捕获问题")])],-1),b={id:"_1-0-0-2023-11-02",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#_1-0-0-2023-11-02","aria-hidden":"true"},"#",-1),I=e("ul",null,[e("li",null,"首个版本提交至 Maven")],-1),S=e("h2",{id:"ui-extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ui-extension","aria-hidden":"true"},"#"),o(" ui-extension")],-1),k={id:"_1-0-4-2024-05-05",tabindex:"-1"},P=e("a",{class:"header-anchor",href:"#_1-0-4-2024-05-05","aria-hidden":"true"},"#",-1),R=i("<ul><li>整合 <code>Fragment</code> 扩展中的进入、退出动画方法参数</li><li>移除默认的 <code>Fragment</code> 扩展中的过渡动画，并删除相关资源文件</li><li><code>ViewBinding</code> 扩展中新增 <code>Fragment.viewBinding</code> 方法</li><li>修复 <code>ViewBinding</code> 扩展中 <code>viewBinding</code> 装载的布局不会自动缓存的问题</li><li>修复 <code>ViewBinding</code> 扩展中 <code>inflate</code> 方法遇到 <code>&lt;merge&gt;</code> 和 <code>&lt;include&gt;</code> 类型布局不能正确装载的问题</li><li>调整 <code>ViewBinding</code> 扩展中 <code>inflate</code> 方法遇到 <code>&lt;merge&gt;</code> 和 <code>&lt;include&gt;</code> 类型布局将忽略 <code>attachToParent</code> 参数</li><li>移除旧版 <code>ViewBinding</code> 扩展中已弃用的全部方法</li></ul>",1),D={id:"_1-0-3-2024-03-08",tabindex:"-1"},W=e("a",{class:"header-anchor",href:"#_1-0-3-2024-03-08","aria-hidden":"true"},"#",-1),L=i("<ul><li>移除了所有扩展方法 <code>kt</code> 文件的 <code>Factory</code> 后缀</li><li>移除了上一个版本中已作废的文件</li><li><code>ViewFactory</code> 的 <code>ViewLayoutParams</code> 方法新增支持 <code>AbsListView.LayoutParams</code> 类型</li><li><code>ViewFactory</code> 中新增 <code>updateCompoundDrawables</code>、<code>updateCompoundDrawablesWithIntrinsicBounds</code> 方法</li><li><code>ViewFactory</code> 中新增 <code>parent</code>、<code>parentOrNull</code> 方法</li><li><code>ViewFactory</code> 中新增 <code>walkToRoot</code>、<code>walkThroughChildren</code>、<code>indexOfInParent</code> 方法</li><li><code>ViewFactory</code> 中新增 <code>child</code>、<code>childOrNull</code>、<code>firstChild</code>、<code>lastChild</code>、<code>firstChildOrNull</code>、<code>lastChildOrNull</code> 方法</li><li>合并 <code>ViewFactory</code> 中的 <code>inflate</code> 方法到 <code>LayoutInflaterFactory</code> 中并作废原方法</li><li><code>FragmentFactory</code> 中的添加方法新增 <code>addToBackStack</code> 参数</li><li><code>FragmentFactory</code> 中作废了 <code>commitTransaction</code> 方法，现已迁移到官方提供的 <code>fragment-ktx</code> 依赖</li><li><code>ResourcesFactory</code> 中新增 <code>themeResId</code> 方法</li><li>新增全新的 <code>ViewBinding</code> 解决方案并弃用旧版方案</li></ul>",1),O={id:"_1-0-2-2024-01-02",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#_1-0-2-2024-01-02","aria-hidden":"true"},"#",-1),M=i("<ul><li>移动了部分不规范分类的包名，如遇到报错，请重新对这些调用的方法进行 <code>import</code> 操作</li><li>修改了针对 Java 调用的相关名称</li><li><code>ViewFactory</code> 中新增可设置横向纵向的 <code>updatePadding</code> 方法</li><li><code>ViewFactory</code> 中的 <code>inflate</code> 方法将自动使用 <code>Activity.getLayoutInflater</code></li><li>更名 <code>ColorsFactory</code> 为 <code>ColorFactory</code></li><li>更名 <code>ColorFactory</code> 中的 <code>toMixColor</code> 为 <code>mixColorOf</code></li><li><code>ColorFactory</code> 中的部分方法现在将不会再抛出异常</li><li>新增 <code>GradientDrawableCompat</code>，你可以使用其创建 Android 10 以下版本的 <code>GradientDrawable</code></li><li><code>DrawableFactory</code> 中新增可设置横向纵向的 <code>updatePadding</code> 方法</li><li>作废了 <code>DimensionFactory</code> 中的 <code>asDp</code>、<code>asPx</code> 及其用法因为它设计错误，现已对接到新用法 <code>toDp</code>、<code>toPx</code></li><li>新增 <code>DisplayDensity</code>，你可以方便地使用 <code>dp</code>、<code>px</code> 来转换单位</li><li>作废了 <code>ResourcesFactory</code> 中的 <code>getDimensionPx</code>，请手动使用 <code>toPx</code> 进行计算</li><li>作废了 <code>ResourcesFactory</code> 及 <code>ActivityFactory</code> 中的 <code>isSpecialWindowingMode</code>，请不要再使用</li><li><code>ResourcesFactory</code> 中新增 <code>getFontCompat</code> 方法</li><li>修复了 <code>FragmentFactory</code> 中的 <code>commt</code> 相关功能用法错误</li><li>大量修改了 <code>FragmentFactory</code> 中的相关用法，现在请参考文档开始使用新用法</li><li><code>BitmapFactory</code> 中新增 <code>compressBitmap</code> 方法</li><li><code>ToastFactory</code> 中新增 <code>Window.toast</code> 方法</li><li><code>ToastFactory</code> 中的 <code>toast</code> 方法新增 <code>allowBackgroud</code> 参数，你现在可以允许在非主线程中弹出 <code>Toast</code></li><li><code>WindowFactory</code> 中的部分方法现在将不会再抛出异常</li><li><code>WindowFactory</code> 中新增可使用 <code>Float</code> 类型设置屏幕亮度的方法</li><li><code>ViewFactory</code> 中使用 <code>WindowInsetsController</code> 来显示或隐藏输入法并更名方法为 <code>showIme</code>、<code>hideIme</code></li><li>作废了 <code>ViewLayoutParam</code> 类，现在请使用 <code>ViewLayoutParams</code> 方法代替</li><li><code>ViewFactory</code> 中的 <code>performKeyPressed</code> 新增 <code>duration</code> 参数</li><li><code>ViewFactory</code> 中新增可设置横向纵向的 <code>updateMargin</code> 方法</li><li>对 <code>ActivityFactory</code> 中的方法进行了 <code>inline</code> 处理</li><li><code>ActivityFactory</code> 中新增每个 <code>startActivityOrElse</code> 方法</li><li><code>BimapFactory</code> 中的 <code>round</code> 方法新增支持设置每个方向的圆角半径大小</li></ul>",1),N={id:"_1-0-1-2023-11-18-1",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#_1-0-1-2023-11-18-1","aria-hidden":"true"},"#",-1),q=e("ul",null,[e("li",null,[o("修复 ResourcesFactory 中 "),e("code",null,"getColor"),o(" 与 "),e("code",null,"getColorStateList"),o(" 方法返回值错误问题")])],-1),G={id:"_1-0-0-2023-11-02-1",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#_1-0-0-2023-11-02-1","aria-hidden":"true"},"#",-1),K=e("ul",null,[e("li",null,"首个版本提交至 Maven")],-1),J=e("h2",{id:"system-extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#system-extension","aria-hidden":"true"},"#"),o(" system-extension")],-1),U={id:"_1-0-1-2024-01-02",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#_1-0-1-2024-01-02","aria-hidden":"true"},"#",-1),j=i("<ul><li>更名 <code>SystemVersion</code> 中的部分命名不正确方法</li><li><code>SystemVersion</code> 中新增 <code>name</code> 属性</li><li>缓存 <code>SystemKind</code> 的检测结果防止重复创建反射对象</li><li>作废了 <code>SystemKind</code> 中的 <code>get</code>，现在请使用 <code>current</code> 属性获取当前系统类型</li><li>更名 <code>ApplicationFactoy</code> 中的部分命名不正确方法和类</li><li>移除了 <code>AplicationInfoFlagsWrapper</code> 中的 <code>FLAG</code> 前缀</li><li>修改了 <code>BroadcastFactory</code> 中的相关用法，现在请参考文档使用新用法创建运行时广播</li><li>修改了 <code>ClipboardFactory</code> 中的相关用法，现在请参考文档使用新用法使用剪贴板功能</li><li>对 <code>ServiceFactory</code> 中的方法进行了 <code>inline</code> 处理</li><li><code>ServiceFactory</code> 中新增 <code>startServiceOrElse</code>、<code>startForegroundServiceOrElse</code> 方法</li></ul>",1),z={id:"_1-0-0-2023-11-02-2",tabindex:"-1"},Q=e("a",{class:"header-anchor",href:"#_1-0-0-2023-11-02-2","aria-hidden":"true"},"#",-1),X=e("ul",null,[e("li",null,"首个版本提交至 Maven")],-1),Z=e("h2",{id:"permission-extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#permission-extension","aria-hidden":"true"},"#"),o(" permission-extension")],-1),$=e("p",null,"暂未发布。",-1),ee=e("h2",{id:"compose-extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compose-extension","aria-hidden":"true"},"#"),o(" compose-extension")],-1),oe={id:"_1-0-2-2024-01-16",tabindex:"-1"},de=e("a",{class:"header-anchor",href:"#_1-0-2-2024-01-16","aria-hidden":"true"},"#",-1),ce=i("<ul><li>新增 <code>HapticFeedback</code> 方法，你可以将其设置到任意的点击、触摸事件上</li><li><code>ComponentPadding</code> 新增 <code>None</code> 方法，你可以使用其直接得到 <code>ComponentPadding(0.dp)</code></li><li>修改了 <code>Dialog</code> 中的 <code>onDismissRequest</code> 为强制要求存在，匹配官方提供的 <code>foundation</code> 中的用法</li><li>部分代码风格优化</li></ul>",1),ie={id:"_1-0-1-2024-01-08",tabindex:"-1"},te=e("a",{class:"header-anchor",href:"#_1-0-1-2024-01-08","aria-hidden":"true"},"#",-1),le=e("ul",null,[e("li",null,[o("移除部分无用的 "),e("code",null,"@Stable"),o(" 注解")]),e("li",null,[o("新增 "),e("code",null,"borderOrElse"),o(" 的同名方法和新用法")]),e("li",null,[o("新增 "),e("code",null,"AdaptiveRow"),o("、"),e("code",null,"AdaptiveColumn")])],-1),ae={id:"_1-0-0-2024-01-02",tabindex:"-1"},ne=e("a",{class:"header-anchor",href:"#_1-0-0-2024-01-02","aria-hidden":"true"},"#",-1),re=e("ul",null,[e("li",null,"首个版本提交至 Maven")],-1),se=e("h2",{id:"compose-multiplatform",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compose-multiplatform","aria-hidden":"true"},"#"),o(" compose-multiplatform")],-1),he={id:"_0-1-0-2024-01-02",tabindex:"-1"},_e=e("a",{class:"header-anchor",href:"#_0-1-0-2024-01-02","aria-hidden":"true"},"#",-1),ue=e("ul",null,[e("li",null,"首个版本提交至 Maven")],-1);function me(pe,ye){const d=l("Badge");return a(),n("div",null,[s,e("h3",h,[_,o(" 1.0.5 | 2024.03.08  "),c(d,{type:"tip",text:"最新",vertical:"middle"})]),u,e("h3",m,[p,o(" 1.0.4 | 2024.01.02  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),y,e("h3",w,[g,o(" 1.0.3 | 2023.12.03  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),x,e("h3",F,[f,o(" 1.0.2 | 2023.11.24  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),v,e("h3",C,[B,o(" 1.0.1 | 2023.11.18  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),V,e("h3",b,[A,o(" 1.0.0 | 2023.11.02  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),I,S,e("h3",k,[P,o(" 1.0.4 | 2024.05.05  "),c(d,{type:"tip",text:"最新",vertical:"middle"})]),R,e("h3",D,[W,o(" 1.0.3 | 2024.03.08  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),L,e("h3",O,[T,o(" 1.0.2 | 2024.01.02  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),M,e("h3",N,[E,o(" 1.0.1 | 2023.11.18  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),q,e("h3",G,[H,o(" 1.0.0 | 2023.11.02  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),K,J,e("h3",U,[Y,o(" 1.0.1 | 2024.01.02  "),c(d,{type:"tip",text:"最新",vertical:"middle"})]),j,e("h3",z,[Q,o(" 1.0.0 | 2023.11.02  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),X,Z,$,ee,e("h3",oe,[de,o(" 1.0.2 | 2024.01.16  "),c(d,{type:"tip",text:"最新",vertical:"middle"})]),ce,e("h3",ie,[te,o(" 1.0.1 | 2024.01.08  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),le,e("h3",ae,[ne,o(" 1.0.0 | 2024.01.02  "),c(d,{type:"warning",text:"过旧",vertical:"middle"})]),re,se,e("h3",he,[_e,o(" 0.1.0 | 2024.01.02  "),c(d,{type:"tip",text:"最新",vertical:"middle"})]),ue])}const ge=t(r,[["render",me],["__file","changelog.html.vue"]]);export{ge as default};
