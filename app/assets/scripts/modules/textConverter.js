class TextConverter {

  convertDateString(dateString) {
    dateString = String(dateString)
    dateString = dateString.slice(0, 10);
    return dateString;
  }


  convertHeadlineString(headlineString) {
    headlineString = String(headlineString)

    if (headlineString.length >= 18) {
      headlineString = headlineString.slice(0, 18);
      headlineString = headlineString + "..."
    }
    return headlineString;
  }
}

export default TextConverter;
