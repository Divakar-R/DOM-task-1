function label_create(ele_name_1,attrname_1,attrvalue_1,content){
    var ele=document.createElement(ele_name_1);
    ele.setAttribute(attrname_1,attrvalue_1);
    ele.innerHTML=content;
    return ele;
}

function break_create(){
    var br=document.createElement("br");
    return br;
}

function input_create(ele_name_2,attrname_2,attrvalue_2,id_value){
    var element=document.createElement(ele_name_2);
    element.setAttribute(attrname_2,attrvalue_2);
    element.id=id_value;
    return element;

}

var label_1= label_create("label","for","fname","First Name");
var break_1= break_create();
var input_1= input_create("input","type","text","fname");
var break_2= break_create();

var label_2= label_create("label","for","mname","Middle Name");
var break_3= break_create();
var input_2= input_create("input","type","text","mname");
var break_4= break_create();

var label_3= label_create("label","for","lname","Last Name");
var break_5= break_create();
var input_3= input_create("input","type","text","lname");
var break_6= break_create();

var label_4= label_create("label","for","email","Email");
var break_7= break_create();
var input_4= input_create("input","type","email","email");
var break_8= break_create();

var label_5= label_create("label","for","password","Password");
var break_9= break_create();
var input_5= input_create("input","type","password","password");
var break_10= break_create();

var label_6= label_create("label","for","phone","Phone Number");
var break_11= break_create();
var input_6= input_create("input","type","number","phone")

document.body.append(label_1,break_1,input_1,break_2,label_2,break_3,input_2,break_4,label_3,break_5,input_3,break_6,label_4,break_7,input_4,break_8,label_5,break_9,input_5,break_10,label_6,break_11,input_6);