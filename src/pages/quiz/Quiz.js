import React from 'react';
import './quiz.css';
import QuizComponent from "../../components/quizcomponent/QuizComponent";
import PageTitle from "../../components/pagetitle/PageTitle";
import Image from "../../components/image/Image";

function Quiz() {

        return (
            <>
                <section className="outer-content__container">
                    <div className="inner-content__container">
                        <PageTitle text="QUIZ" />
                        <div className="image__container">
                            <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                            <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                            <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                            <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                            <Image alt="nic-cage" imageSize="img--small" imagePosition="img--center"/>
                        </div>
                        <QuizComponent />
                    </div>
                </section>
            </>
        );
    }

export default Quiz;
