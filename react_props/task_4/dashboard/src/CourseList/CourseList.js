import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const CourseList = () => {
  const courses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {courses.map((course) => (
          <CourseListRow key={course.id} {...course} />
        ))}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  isLoggedIn: PropTypes.bool,
};

CourseList.defaultProps = {
  isLoggedIn: false,
};

export default CourseList;
