import React, {useState} from 'react';


export default function Textforms(props) {

 

    const handleUpClick = () =>{
      text.toUpperCase();
        setText(text) ;
    }

    const handleLoClick = () =>{
         const v = test.toLowerCase()
          setText(v);
      }

    const handleOnChange = (event) =>{
        setText(EventTarget.value);
    }

    const handledelete = () =>{
          setText('');
      }
    
    
    const [text, setText] = useState('Enter');
  return (
  
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
   <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#212529',color: props.mode==='light'?'black':'white' }}  onChange={handleOnChange}  id="mybox" rows="8" ></textarea>
    </div>
    <button className={`btn btn-${props.Bcolor} mx-1`} onClick={handleUpClick}> Conver to Uppercase </button>
    <button className={`btn btn-${props.Bcolor} mx-1`} onClick={handleLoClick}> Conver to Lowercase </button>
    <button className={`btn btn-${props.Bcolor} mx-1`} onClick={handledelete}> Delete text </button>
    </div>

    <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
         <h2>Textutils</h2>
         <p>Paragraph on Love in English: Love is a quality that defines human beings. Love is a quality of the human heart. It is a feeling that the human species can express. It is love that brings and keeps people together in harmony and happiness. Parents love their children. In a family the members love each other. We love our relatives and friends. We love our country. love God, and show this love by loving all creatures created by the supreme God. Love encompasses affection, respect, gratitude, and joy. Love can be expressed in many different ways such as through one’s deeds, words and thoughts.
          Long and Short Paragraph on Love in English
           You will find here below a number of short and long paragraphs on Love of varying word lengths. We hope these paragraphs on Love will help students in completing their school assignments. These will also help children write and read out paragraphs in simple words and with small sentences. Students can select any Love paragraph according to their particular requirement.</p>
         
         
     </div>
     </>

  );
}
