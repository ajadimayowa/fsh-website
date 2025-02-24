import {Card } from 'react-bootstrap';
import './course-card.css';
import React from 'react';

const CourseCard: React.FC<any> = ({ course }) => {
    return (
        <a href={`tech-career/${course?.courseId}`} style={{textDecoration:'none'}}>
        <Card 
        style={{backgroundColor:'rgba(233,248,255,0.5)'}}
        className='w-100 shadow-sm rounded rounded-3 border border-0'>
            <Card.Body className='d-flex flex-column align-items-start flex-start gap-3'>
                <img className='w-100 rounded' src={course?.courseImage} height={150} />
                <h5 className='title'>{course?.courseTitle}</h5>
                <p>{course?.description}</p>
                <div className='d-flex gap-2'>
                    <a className='text-dark' role='button' style={{ textDecoration: 'none' }}>Register</a>
                    <i className="bi bi-arrow-right"></i>
                </div>
            </Card.Body>
        </Card>
        </a>
    )

}

export default CourseCard