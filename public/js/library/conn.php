<?php
    header('content-type:text/html;charset=utf-8');

    $mysql_conf = array(
        'host'=>'localhost:8808', // 地址 端口号 mysql默认运行在8808
        'db_user'=>'root', // 登陆数据库的用户名
        'db_pass'=>'root', // 登陆数据库的密码
        'db'=>'mi'   // 数据库名称
    );

    // 连接数据库(登陆)
    $mysqli = @new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);

    // 判断有没有连接成功
    // var_dump($mysqli);
    if($mysqli->connect_errno){
        // 如果有错误 终止代码执行  die()用于终止代码执行
        die('连接错误'.$mysqli->connect_errno);
    }

    // 设置查询字符串
    $mysqli->query('set names utf8');

    // 选择数据库
    $select_db = $mysqli->select_db($mysql_conf['db']);

    if(!$select_db){
        die('数据库选择错误'.$mysqli->error);
    }
?>