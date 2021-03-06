const text_truncate = function(str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};

const loader = function(start, stop) {
    if (start === "start") {
        document.getElementById("loader").style.display = 'block'
    } else {
        document.getElementById("loader").style.display = 'none'
    }
}

const error_handle = function(error_str) {
    const error_div = document.getElementById("error");
    error_div.innerHTML = error_str;
    error_div.style.display = 'block';
}

const backend_callback_url_switch = function(url) {
    return "8080" === location.port ? "http://localhost:8081" + url : url
}

export {
    text_truncate,
    loader,
    error_handle,
    backend_callback_url_switch

}