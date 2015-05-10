// JavaScript Document
function tabOn(item,tabBtn,tabBtnCurClass,eventType){
    var  _box = item;
    var _tabBtn = _box.find(tabBtn);
    var _tabBtnCurClass = tabBtnCurClass;
    var _etype = eventType;

    _tabBtn.bind(_etype,function(){
        $(this).addClass(_tabBtnCurClass).siblings().removeClass(_tabBtnCurClass);
    })
}
$(function(){
    tabOn($("nav"),"a","current","mouseover",function(){
    });
})
//有默认跳转的问题！！！
