import $ from 'Jquery';
class TextConverter {

  static convertDateString(dateString) {
    dateString = String(dateString)
    const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let month = dateString.slice(5, 6);

    //Makes the month
    if (month == 0) {
      month = Number(dateString.slice(6, 7));
    } else {
      month = Number(dateString.slice(5, 7));
    }
    month = mS[month - 1];
    let day = dateString.slice(8, 9);

    // Makes the day
    if (day == 0) {
      day = Number(dateString.slice(9, 10));
    } else {
      day = Number(dateString.slice(8, 10));
    }

    //Makes the year
    let year = dateString.slice(0, 4);

    //Marge day, month and year together in a one string
    dateString = day + ". " + month + " " + year;

    return dateString;

  }


  static convertHeadlineString(headlineString) {
    headlineString = String(headlineString)

    if (headlineString.length >= 18) {
      headlineString = headlineString.slice(0, 18);
      headlineString = headlineString + "..."
    }
    return headlineString;
  }
}

export default TextConverter;
