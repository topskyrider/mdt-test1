var count = 0;
function postFunction()
{
    var  part1 = document.getElementById("text1");
    if(count ==0)
    {
        var post = document.getElementById("post1");
        post.innerHTML=part1.value;
        count ++;
    }
    else if(count ==1)
    {
        var post1 = document.getElementById("reply1");
        post1.innerHTML=part1.value;
        count ++;
    }
    else if (count ==2)
    {
        var post2 = document.getElementById("reply2");
        post2.innerHTML=part1.value;
        count ++;
    }
    else
    {
        alert("Full!")
    }
    document.getElementById("text1").value = "";
}
function clearFunction()
{
    var post = document.getElementById("post1");
    var post1 = document.getElementById("reply1");
    var post2 = document.getElementById("reply2");
    post.innerHTML="";
    post1.innerHTML="";
    post2.innerHTML="";
    count =0;
}
    