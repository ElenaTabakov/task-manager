import * as S from "./CircleTitle.styles";



interface CircleTitleProps {
  circleContent: string ;
  className?: string;
}

const tW = (text: string) => {  

    const textLength = text.split(' ');
    // console.log(textLength);
    if (textLength.length === 1 ){
        return textLength[0][0].toUpperCase();
    }
    if (textLength.length > 1 ){
        // const lastWord = ;
        return (textLength[0][0].toUpperCase() + textLength[textLength.length - 1][0].toUpperCase());
    }
    return (text.split(' ').map(word => word[0]));
}

const Circle = ({ circleContent, className}: CircleTitleProps) => {
  return (
    <S.CircleTitle className={className}>{tW(circleContent)}</S.CircleTitle>
  );
};

export default Circle;
