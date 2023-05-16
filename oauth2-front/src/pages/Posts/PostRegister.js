import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

const PostRegister = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imgFiles, setImgFiles] = useState([]);
    const fileId = useRef(1);
    
    const postRegisterSubmit = useMutation(async () => {

        const formData = new FormData(); //java에서의 map
        formData.append("title", title);
        formData.append("userId", principal.data.data.userId);
        formData.append("content", content);

        
        imgFiles.forEach(imgFile => {
            formData.append("imgFiles", imgFile.file);
        })

       formData.forEach((value, key) => {
            console.log("key: " + key + ", value: " + value);
       })

        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "multipart/form-data"

            }
        }
        const response = await axios.post("http://localhost:8080/post/register", formData, option);
        return response;
    });


    const principal = useQuery(["principal" ], async () => {

        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,

            }
        }

        const response = await axios.get("http://localhost:8080/account/principal",option);
        return response;
    });

    if(principal.isLoading) {
        return <>...Loading</>
    }

    const titleOnChangeHandle = (e) => {
        setTitle(e.target.value);
    }

    const contentOnChangeHandle = (e) => {
        setContent(e.target.value);
    }

    const addFileHandle = (e) => {
        // console.log(e.target.files);

        const newImgFiles = [];

        for(const file of e.target.files){
            const fileData = {
                id: fileId.current,
                file
            }
            fileId.current +=1;
            newImgFiles.push(fileData); //동기
        }

        setImgFiles([...imgFiles, ...newImgFiles]); //비동기라서 , 파일이 순서대로 들어간다는 보장이 없음 // newImgFiles 가 동기처리
        e.target.value = null; 
    }

    const removeFileHandle = (e) => {

        setImgFiles([...imgFiles.filter(imgFile => imgFile.id !== parseInt(e.target.value))]); //imFile.id -> int // e.target.value = String 따라서, 형변환 필요
        
    }

    const registerPostSubmitHandle = () => {
        postRegisterSubmit.mutate();
    }


    return (
        <div>
            <h3>제목</h3>
            <input type="text" onChange={titleOnChangeHandle}/>
            <h3>작성자</h3>
            <input type="text" value={principal.data.data.name} disabled={true} />
            <h3>내용</h3>
            <textarea id="" cols="30" rows="10" onChange={contentOnChangeHandle}></textarea>
            <h3>이미지파일</h3>
            <input type="file" multiple={true} onChange={addFileHandle} />
            {/* accept={".jpg, .png"}  */}
            {/* 파일을 여러개 넣을 수 있음 단, 복수개의 파일 중 하나만 제거하고 싶다면 ?  
            
                1. 무조건 파일 하나만 올리게끔 구성
                2. 
            
            */}
            <ul>
                {imgFiles.map(imgFile => <li key={imgFile.id}>{imgFile.file.name} <button value ={imgFile.id} onClick={removeFileHandle}>삭제</button></li>)}
            </ul>
            <button onClick={registerPostSubmitHandle}>작성하기</button>
        </div>
    );
};

export default PostRegister;
