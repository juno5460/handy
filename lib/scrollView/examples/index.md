<style type="text/css">
        pre {
            border: 1px solid #CCC;
            background: #EEE;
            padding: 10px;
        }

        body > section {
            padding: 20px;
            border-bottom: 1px solid #CCC;
            -webkit-box-shadow: 2px 2px 2px #ccc;
            -webkit-border-radius: 4px;
            background-color: #EEE;
        }

        h3 {
            margin-top: 20px;
            padding-top: 20px;
        }

        pre {
            background-color: white;
            -webkit-box-shadow: 2px 2px 2px #ccc;
            -webkit-border-radius: 4px;
        }

        img {
            -webkit-border-radius: 5px;
            -webkit-box-shadow: 2px 2px 2px #CCC;
        }

        #example1 {
            width: 300px;
            overflow: hidden;
            margin: 0 auto;
        }

        .module_dialog_help_iscrollContainer {
            border: 1px solid #CCC;
            margin: 20px;
            height: 300px;
            background: #EEE;
            border-radius: 4px;
            position: relative; /*重要！！！*/
            background: white;
            -webkit-box-shadow: 2px 2px 2px #ccc;
        }

        .module_dialog_help_scroller {
            padding: 20px;
        }

        #example2 {
            width: 300px;
            height: 160px;
            position: relative;
            z-index: 1;
            overflow: hidden;
            margin-top: 10px;
            margin: 0 auto;

        }

        #example2 > div {
            background-color: white;
            -webkit-border-radius: 10px;
        }

        #example2 #thelist {
            width: 2100px;
            height: 100%;
            float: left;
        }

        #example2 ul {
            list-style: none;
            display: block;
            float: left;
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            text-align: left;
        }

        #example2 li {
            box-sizing: border-box;
            display: block;
            float: left;
            width: 300px;
            height: 140px;
            text-align: center;
            font-family: georgia;
            font-size: 18px;
            line-height: 140%;
            padding: 20px 0;
        }

</style>

<h3>对于普通的滚动</h3>
<section>
    <h4>演示界面：</h4>
    <a href="javascript:example1.scrollTo(0,-100,400,false);">滚动至100像素的地方</a><br/>
    <a href="javascript:example1.scrollTo(0,-200,400,false);">滚动至200像素的地方</a><br/>
    <a href="javascript:example1.scrollTo(0,150,400,true);">滚动当前位置向下150像素</a><br/>
    <a href="javascript:example1.scrollTo(0,-150,400,true);">滚动当前位置向上150像素</a><br/>
    <a href="javascript:createiScroll();">创建该对象</a> <a href="javascript:example1.destroy();example1=null;">销毁该对象</a>
    <a href="javascript:appendChildNode();">增加部分节点</a>
<article id="example1">
        <div class="module_dialog_help_scroller" data-iscroll-class="module_dialog_help_iscrollContainer">
            <h5>常见问题：</h5>
            <article class="module_list_select">
                <section class="listItems"><a href="#" class="flex block">怎样注册支付宝帐户？</a></section>
                <section class="listItems"><a href="#" class="flex block">怎样更改支付宝绑定手机号码？</a></section>
                <section class="listItems"><a href="#" class="flex block">如何找回登录密码？</a></section>
                <section class="listItems"><a href="#" class="flex block">免费流量是什么？</a></section>
                <section class="listItems"><a href="#" class="flex block">话费充值卡充值后为什么不是即时到账？</a></section>
                <section class="listItems"><a href="#" class="flex block">为什么我的余额支付功能被关闭了？</a></section>
                <section class="listItems"><a href="#" class="flex block">可以货到付款吗？</a></section>
            </article>
            <h5>密码管理：</h5>
            <article class="module_list_select">
                <section class="listItems"><a href="#" class="flex block">如何修改登录密码？</a></section>
                <section class="listItems"><a href="#" class="flex block">输入登录密码显示空白页怎么办？</a></section>
                <section class="listItems"><a href="#" class="flex block">如何修改支付密码？</a></section>
                <section class="listItems"><a href="#" class="flex block">如何找回登录密码？</a></section>
                <section class="listItems"><a href="#" class="flex block">如何找回支付密码？</a></section>
                <section class="listItems"><a href="#" class="flex block">密码输入错误，账户暂时锁定？</a></section>
            </article>
            <h5>密码管理：</h5>
            <article class="module_list_select">
                <section class="listItems"><a href="#" class="flex block">如何修改登录密码？</a></section>
                <section class="listItems"><a href="#" class="flex block">输入登录密码显示空白页怎么办？</a></section>
                <section class="listItems"><a href="#" class="flex block">如何修改支付密码？</a></section>
                <section class="listItems"><a href="#" class="flex block">如何找回登录密码？</a></section>
                <section class="listItems"><a href="#" class="flex block">如何找回支付密码？</a></section>
                <section class="listItems"><a href="#" class="flex block">密码输入错误，账户暂时锁定？</a></section>
            </article>
        </div>
</article>

```javascript
    var example1;
    seajs.use('scrollView', function(iScroll) {
        example1 = new iScroll({element:".module_dialog_help_scroller"});
    });
    function createiScroll() {
        seajs.use('scrollView', function(iScroll) {
            example1 = example1 || new iScroll({element:".module_dialog_help_scroller"});
        });
    }
    function appendChildNode() {
        var ele = document.createElement("div");
        ele.innerHTML = "add new content";
        document.querySelector(".module_dialog_help_scroller").appendChild(ele);
        ele = null;
    }
```

</section>

<h3>逐页拖动滚动</h3>
<section>
    <h4>演示界面:(左右进行拖动)</h4>
    <a href="javascript:example2.scrollToPage(2,0,500);">滚动至第三页</a>
    <a href="javascript:example2.scrollToPage(6,0,500);">滚动至页底</a>
    <a href="javascript:example2.scrollToPage('prev',0,500);">向前滚动一页</a>
    <a href="javascript:example2.scrollToPage('next',0,500);">向后滚动一页</a>

<div id="example2">
    <ul id="thelist" data-iscroll-width="300px">
        <li><strong>1.</strong> <em>A robot may not injure a human being or, through inaction, allow a human being
            to come to harm.</em></li>
        <li><strong>2.</strong> <em>A robot must obey any orders given to it by human beings, except where such
            orders would conflict with the
            First Law.</em></li>
        <li><strong>3.</strong> <em>A robot must protect its own existence as long as such protection does not
            conflict with the First or
            Second Law.</em></li>
        <li><strong>Zeroth Law:</strong> <em>A robot may not harm humanity, or, by inaction, allow humanity to come
            to harm.</em></li>
        <li><strong>Lyuben Dilov's Forth law:</strong> <em>A robot must establish its identity as a robot in all
            cases.</em></li>
        <li><strong>Harry Harrison's Forth law:</strong> <em>A robot must reproduce. As long as such reproduction
            does not interfere with the
            First or Second or Third Law.</em></li>
        <li><strong>Nikola Kesarovski's Fifth law:</strong> <em>A robot must know it is a robot.</em></li>
    </ul>
</div>

```javascript
   var example2;
    seajs.use('scrollView', function(iScroll) {
        example2 = new iScroll({
            element:"#thelist",
            options:{
                snap:true,
                momentum:false,
                hScrollbar:false
            }
        });
    });
```
</section>
