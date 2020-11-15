<?php
    include('../js/library/conn.php');

    // 登陆的流程
    // 1. 接收表单数据
    // 2. 在数据库中查找和账号密码匹配的数据
    // 3. 返回结果

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from users where username='$user_name' and password='$user_name'";

    // 执行查询
    $result = $mysqli->query($sql);

    $mysqli->close();

    if($result->num_rows>0){
        echo '<script>alert("登陆成功");</script>';
        echo '<script>location.href="../index.html";</script>';
    }else{
        echo '<script>alert("用户名或密码错误");</script>';
        echo '<script>location.href="../eg04.login.html";</script>';
    }
?>