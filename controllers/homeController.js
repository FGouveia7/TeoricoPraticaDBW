import info from "../Models/livros.js"
function getIndex(req,res){
    res.render("index",{info});
}
function getForm(req,res){
    res.render("form");
}
function getBootstrap(req,res){
    res.render("BootstrapExm");
}
function getJavaScript(req,res){
    res.render("JavaScriptExm");
}
export {getIndex, getForm, getBootstrap, getJavaScript}