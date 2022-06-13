import React, {useState, useEffect} from 'react';
import {Link, Route, Routes, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Error = (props) => {

    return (
        <>
            <img src='https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png' width='100%'/>
        </>
    )
}

export default Error;