import React, { useState } from 'react';
import { Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';

function UploadImage(props) {
  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: '',
    //   status: 'done',
    //   url: '',
    // },
  ]);
  const [thumbUrl, setThumbUrl] = useState(null);


  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    (fileList && fileList.length > 0) &&
      setThumbUrl(fileList[0].thumbUrl)
    props.setImageUrl(thumbUrl)
  };

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  console.log("thumbUrl", thumbUrl)

  return (
    <ImgCrop rotate>
      <Upload
        action={"https://www.mocky.io/v2/5cc8019d300000980a055e76"}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        beforeUpload={beforeUpload}
      //onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Upload image'}
      </Upload>
    </ImgCrop>


  );
}

export default UploadImage;
