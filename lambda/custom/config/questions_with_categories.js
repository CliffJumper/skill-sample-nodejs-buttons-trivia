'use strict';
/*
 * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 * http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */


/**
 * Questions library
 *
 * Use this file to create your own set of questions.
 *
 * Object properties:
 *      index:          The index of the question in this list
 *      question:       The question you want Alexa to ask
 *      answers:        The list of available answers
 *      correct_answer: The correct answer to the question
 *
 * When adding or updating questions and answers, you must take the list of all values
 * in each of the 'answers' arrays for all questions and add them to a custom slot
 * in your skill called 'answers'.
 *
 * The 'answers' custom slot is be mapped to a couple of intents in the interaction model.
 * One intent, named 'AnswerOnlyIntent', contains only the slot, by itself, in order
 * to maximize the accuracy of the model.
 *
 * For example:
 *      AnswerOnlyIntent {answers}
 *
 * The other intent, 'AnswerQuestionIntent', provides more complex speech patterns
 * to match other utternaces users may include with their answers.
 *
 * For example:
 *      AnswerQuestionIntent is it {answers}
 *      AnswerQuestionIntent it is {answers}
 *      AnswerQuestionIntent the answer is {answers}
 *      AnswerQuestionIntent I think the answer is {answers}
 *
 * See model file at models/en-US.json for a complete example.
 */
module.exports = Object.freeze({
    questions: [
        {
            index: 1,
            categoryIndex: 4,
            categoryName: 'numbers numbers numbers',
            questionValue: 500,
            question: 'This is the number of all-time work streams at EFX',
            answers: ['thirteen'],
            correct_answer: 'thirteen'
        },
        {
            index: 2,
            categoryIndex: 4,
            categoryName: 'numbers numbers numbers',
            questionValue: 850,
            question: 'To date, the number of Cloudreachers who have participated in the EFX program.',
            answers: ['sixty six'],
            correct_answer: 'sixty six'
        },
        {
            index: 3,
            categoryIndex: 1,
            categoryName: 'eye spy P I I',
            questionValue: 500,
            question: 'This image hardening standard was successfully implemented for the entire enterprise via an  AMI pipeline solution.',
            answers: ['Sys Level two'],
            correct_answer: 'Sys Level two'
        },
        {
            index: 4,
            categoryIndex: 2,
            categoryName: 'tooling around',
            questionValue: 850,
            question: 'Despite its learning curve, this InfraCode tool has been critical to the success of the program. ',
            answers: ['Terraform'],
            correct_answer: 'Terraform'
        },
        {
            index: 5,
            categoryIndex: 3,
            categoryName: 'atlanta after hours',
            questionValue: 500,
            question: 'This is the most frequented, multi-level, golf destination to relax after work',
            answers: ['top golf'],
            correct_answer: 'top golf'
        },
        {
            index: 6,
            categoryIndex: 3,
            categoryName: 'atlanta after hours',
            questionValue: 850,
            question: 'This bar doubles as Cloudreach’s office in Alpharetta and shares the name of a Sci-Fi movie.',
            answers: ['firefly'],
            correct_answer: 'firefly'
        },
        {
            index: 7,
            categoryIndex: 5,
            categoryName: 'container your enthusiasm',
            questionValue: 500,
            question: 'This technology continues to be used in the successful decoupling of applications using modern, secure, microservices architecture principles.',
            answers: ['docker'],
            correct_answer: 'docker'
        },
        {
            index: 8,
            categoryIndex: 5,
            categoryName: 'container your enthusiasm',
            questionValue: 850,
            question: 'This AWS service was successfully used to develop a production pattern for container launching and orchestration that is now used enterprise-wide.',
            answers: ['ECS'],
            correct_answer: 'ECS'
        },
        {
            index: 9,
            categoryIndex: 2,
            categoryName: 'tooling around',
            questionValue: 500,
            question: 'This Policy as Code solution was successfully deployed to enforce security guardrails across the entire estate.',
            answers: ['cloud custodian'],
            correct_answer: 'cloud custodian'
        },
        {
            index: 10,
            categoryIndex: 1,
            categoryName: 'eye spy P I I',
            questionValue: 850,
            question: 'These S3 buckets were created in every NonProd account and are used to detect P,I,I data being uploaded to S3',
            answers: ['validated and drop zone S3 buckets'],
            correct_answer: 'validated and drop zone S3 buckets'
        }
    ]
});
