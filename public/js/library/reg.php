<?php
    // 连接数据库
    include('');
    $phone = $_REQUEST['phone'];
    $sql = "select * from users where user_phone='$user_phone'";

    // 执行查询操作
    $result = $mysqli->query($sql);

    // 判断用户名是否存在(判断有没有查询到数据)
    if($result->num_rows>0){
        echo '<script>alert("用户名已存在")</script>';
        echo '<script>location.href="../eg03.reg.html";</script>';
        $mysqli->close(); 
        die();
    }
    $insert = "insert into users (user_phone) values ('$user_phone')";
    // 执行添加操作  
    // 执行insert操作时 返回一个布尔值表示是否添加成功
    $res = $mysqli->query($insert);
    $mysqli->close(); 

    if($res){
        echo '<script>alert("注册成功");</script>';
        echo '<script>location.href="../eg04.login.html";</script>';
    }
?>