import React from 'react';

function Text ({
  content,
  fontSize = '16px',
  fontWeight = '400',
  fontStyle = 'normal',
  color = '#000',
  isUpperCase = false,
  isHandwritten = false
}) {
  const style = {
    fontSize,
    fontFamily: isHandwritten ? '"Italianno", cursive' : '"Playfair Display", serif',
    fontWeight,
    fontStyle,
    color,
    textTransform: isUpperCase ? 'uppercase' : 'none'
  };

  return <div style={style}>{content}</div>;
}

export default Text;