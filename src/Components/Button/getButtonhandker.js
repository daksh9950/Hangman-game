function getButtonhandker(styleType){
    if(styleType === "primary"){
        return "bg-blue-500"
    }
    else if(styleType === "secondary"){
        return "bg-grey-500"
    }
    else if(styleType === "error"){
        return "bg-red-500"
    }
    else if(styleType === "sucess"){
        return "bg-green-500"
    }
    else if(styleType === "warning"){
        return "bg-yellow-500"
    }

}

export default getButtonhandker;