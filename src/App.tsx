import React, {useState} from 'react';
import './App.css';
import * as htmlToImage from 'html-to-image';
import fileDownload from "js-file-download";
import {
    Button,
    ButtonSelect,
    Card,
    CardText,
    IDE,
    Input,
    InputBlock,
    InputBlockRow,
    InputColor, InputColorGradient, InputGradient,
    InputName,
    Preview, SelectType,
    Settings
} from "./components";

let SJson = {
    url: 'https://www.avito.st/',
    text: 'Здесь может быть любой текст',
    background: {
        image: 'https://www.avito.st/s/bx-api/stories/previews/story-61/preview@2x.jpg',
        color: ['#ffffff']
    }
}

function App() {
    let [color, setColor] = useState(SJson.background.color.length === 1?SJson.background.color[0]:'#FFFFFF' );
    let [text, setText] = useState(SJson.text);
    let [url, setUrl] = useState(SJson.url)
    let [image, setImage] = useState(SJson.background.image)
    let [fill, setFill] = useState(SJson.background.color.length === 1)
    let [deg, setDeg] = useState(SJson.background.color.length===3?SJson.background.color[0]:'0')
    let [fColor, setFColor] = useState(SJson.background.color.length===3?SJson.background.color[1]:'#FFFFFF')
    let [sColor, setSColor] = useState(SJson.background.color.length===3?SJson.background.color[2]:'#FFFFFF')
    function getColor(){
        return fill?`${color}`:`linear-gradient(${deg}deg,${fColor},${sColor})`
    }
    function getColorArray(){
        return fill?[color]:[deg,fColor,sColor]
    }
    function getImage(){
        return image.length !== 0?{backgroundImage:`url(${image})`}:''
    }
    function getBackground(){
        return {
        backgroundImage: `${getColor()}`,
        backgroundPosition: `100% 100%, 0% 0%`,
        backgroundRepeat: `no-repeat, repeat`,
        backgroundAttachment: `scroll, scroll`,
        backgroundSize: `100% 100%`,
        backgroundOrigin: `padding-box, padding-box`,
        backgroundClip: `border-box, border-box;`}
    }
    function downloadPNG(){
        htmlToImage.toPng(document.getElementById('card')!)
            .then(function (dataUrl) {
                fileDownload(dataUrl, 'card.png');
            });
    }
    function copyJSONToClipBoard(){
        let obj = {
            url: url,
            text: text,
            background: {
                image: getImage(),
                color: getColorArray()
            }
        }
        let strObj = JSON.stringify(obj);
        copyToClipBoard(strObj)
    }
    function copyToClipBoard(text:string){
        let textArea = document.createElement('textarea')
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy')
        document.body.removeChild(textArea);
    }
    function copyMarkUp(){
        let markup = `<Card id='card' href=${url} style=${JSON.stringify(getBackground()) + ',' + JSON.stringify(getImage())}}><CardText>${text}</CardText></Card>`
        copyToClipBoard(markup)
    }
    return (
        <IDE>
            <Preview>
                <Card id={'card'} style={{...getBackground(), ...getImage()}}>
                    <CardText>{text}</CardText>
                </Card>
            </Preview>
            <Settings>
                <InputBlock>
                    <InputName>Card text</InputName>
                    <Input placeholder={'Enter text'} onChange={e=>setText(e.target.value)} value={text}/>
                </InputBlock>
                <InputBlock>
                    <InputName>Card URL</InputName>
                    <Input placeholder={'Enter URL'} onChange={e=>setUrl(e.target.value)} value={url}/>
                </InputBlock>
                <InputBlock>
                    <InputName>Background image</InputName>
                    <Input placeholder={'Enter URL or dataURI'} onChange={e=>setImage(e.target.value)} value={image}/>
                </InputBlock>
                <InputBlock>
                    <InputName>Background color</InputName>
                        <>
                            {fill?
                                <InputColor type={'color'} value={color} onChange={e=>setColor(e.target.value)}/>
                                :
                                <InputBlockRow>
                                    <InputGradient placeholder={'deg'}
                                                   value={deg}
                                                   onChange={e=>setDeg(e.target.value)}
                                                   type={'number'}/>
                                    <InputColorGradient type={'color'}
                                                        value={fColor}
                                                        onChange={e=>setFColor(e.target.value)}/>
                                    <InputColorGradient type={'color'}
                                                        value={sColor}
                                                        onChange={e=>setSColor(e.target.value)}/>
                                </InputBlockRow>
                            }
                            <SelectType>
                                <ButtonSelect chosen={!fill} onClick={()=>setFill(true)}>Fill</ButtonSelect>
                                <ButtonSelect chosen={fill} onClick={()=>setFill(false)}>Gradient</ButtonSelect>
                            </SelectType>
                        </>
                </InputBlock>
                <InputBlock>
                    <InputBlockRow>
                        <Button onClick={downloadPNG}>Get PNG</Button>
                        <Button onClick={copyMarkUp}>Copy JSX</Button>
                        <Button onClick={copyJSONToClipBoard}>Copy JSON</Button>
                    </InputBlockRow>
                </InputBlock>
            </Settings>
        </IDE>
    );
}

export default App;

