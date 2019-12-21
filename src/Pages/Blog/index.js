import React from 'react';
import { Row, Col } from '../../Components/Grid';
import BlogData from '../../assets/data/blog.json';
import Post from '../../Components/Post';
import './style.scss';

function Blog(props) {
    return (
        <div className="page-section-border">
            <div className="page-section">
                <Row>
                    <Col size="12">
                        <h3 className="secondary-header-text">
                            Blog
                        </h3>
                        <div className="horizontal-line" />
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-1 12">
                        <div className="vertical-line" />
                    </Col>
                    <Col size="sm-11 12">
                        <div className="remove-right-margin">
                            <Row>
                                {BlogData.map((post, index) => (
                                    <Col size="12" key={index}>
                                        <Post
                                            link={post.link}
                                            path={post.path}
                                            title={post.title}
                                            date={post.date}
                                            type={post.type.toUpperCase()}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Blog;