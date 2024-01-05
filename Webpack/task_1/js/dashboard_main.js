import $ from 'jquery';
import _ from 'lodash';

let count = 0;

const updateCounter = _.debounce(function () {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}, 1000);

$(document).ready(function () {
    // adding paragraphs and button to the body
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="startButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // bind debounce function to click event
    $('#startButton').on('click', updateCounter);
});
