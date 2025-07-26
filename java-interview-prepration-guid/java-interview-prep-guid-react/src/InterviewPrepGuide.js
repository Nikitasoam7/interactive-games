import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckSquare, Square, Code, Brain, MessageCircle, Building } from 'lucide-react';

const InterviewPrepGuide = () => {
  const [openSections, setOpenSections] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleCheck = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const ChecklistItem = ({ id, children }) => (
    <div className="flex items-start space-x-2 mb-2">
      <button
        onClick={() => toggleCheck(id)}
        className="mt-1 text-blue-600 hover:text-blue-800"
      >
        {checkedItems[id] ? <CheckSquare size={16} /> : <Square size={16} />}
      </button>
      <span className={checkedItems[id] ? 'line-through text-gray-500' : ''}>{children}</span>
    </div>
  );

  const Section = ({ title, icon: Icon, children, sectionKey }) => (
    <div className="border rounded-lg mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg"
      >
        <div className="flex items-center space-x-2">
          <Icon className="text-blue-600" size={20} />
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        {openSections[sectionKey] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      {openSections[sectionKey] && (
        <div className="p-4 border-t">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Java Developer Interview Prep</h1>
        <p className="text-gray-600">Targeting Google & Top Tech Companies</p>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">💡 <strong>Pro Tip:</strong> Google focuses heavily on problem-solving, system design basics, and clean code. Practice coding on a whiteboard or paper!</p>
        </div>
      </div>

      <Section title="Core Java Concepts" icon={Code} sectionKey="java">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Must-Know Topics:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <ChecklistItem id="oop">OOP Principles (Inheritance, Polymorphism, Encapsulation, Abstraction)</ChecklistItem>
              <ChecklistItem id="collections">Collections Framework (List, Set, Map implementations)</ChecklistItem>
              <ChecklistItem id="multithreading">Multithreading & Concurrency</ChecklistItem>
              <ChecklistItem id="exception">Exception Handling</ChecklistItem>
              <ChecklistItem id="jvm">JVM Architecture & Memory Management</ChecklistItem>
              <ChecklistItem id="gc">Garbage Collection</ChecklistItem>
              <ChecklistItem id="streams">Java 8+ Features (Streams, Lambda, Optional)</ChecklistItem>
              <ChecklistItem id="spring">Spring Framework Basics</ChecklistItem>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded">
            <h5 className="font-semibold text-yellow-800">Common Java Questions:</h5>
            <ul className="text-sm text-yellow-700 mt-1 space-y-1">
              <li>• Difference between == and .equals()</li>
              <li>• HashMap vs ConcurrentHashMap</li>
              <li>• String vs StringBuilder vs StringBuffer</li>
              <li>• Method overloading vs overriding</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Data Structures & Algorithms" icon={Brain} sectionKey="dsa">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Essential Topics:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <ChecklistItem id="arrays">Arrays & Strings</ChecklistItem>
              <ChecklistItem id="linkedlist">Linked Lists</ChecklistItem>
              <ChecklistItem id="stacks">Stacks & Queues</ChecklistItem>
              <ChecklistItem id="trees">Trees (Binary, BST)</ChecklistItem>
              <ChecklistItem id="graphs">Basic Graphs</ChecklistItem>
              <ChecklistItem id="sorting">Sorting Algorithms</ChecklistItem>
              <ChecklistItem id="searching">Binary Search</ChecklistItem>
              <ChecklistItem id="hashing">Hashing</ChecklistItem>
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded">
            <h5 className="font-semibold text-green-800">Practice Platforms:</h5>
            <ul className="text-sm text-green-700 mt-1">
              <li>• LeetCode (Easy → Medium problems)</li>
              <li>• HackerRank Java domain</li>
              <li>• GeeksforGeeks</li>
            </ul>
          </div>

          <div className="bg-red-50 p-3 rounded">
            <h5 className="font-semibold text-red-800">Google-Style Questions:</h5>
            <ul className="text-sm text-red-700 mt-1 space-y-1">
              <li>• Two Sum, Three Sum</li>
              <li>• Valid Parentheses</li>
              <li>• Merge Two Sorted Lists</li>
              <li>• Binary Tree Traversals</li>
              <li>• First Non-Repeating Character</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="System Design (Basics)" icon={Building} sectionKey="system">
        <div className="space-y-4">
          <p className="text-gray-600 text-sm">As a fresher, you'll get basic system design questions. Focus on fundamentals:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <ChecklistItem id="databases">Database basics (SQL vs NoSQL)</ChecklistItem>
            <ChecklistItem id="apis">REST APIs</ChecklistItem>
            <ChecklistItem id="caching">Basic Caching concepts</ChecklistItem>
            <ChecklistItem id="scaling">Horizontal vs Vertical Scaling</ChecklistItem>
            <ChecklistItem id="loadbalancer">Load Balancing basics</ChecklistItem>
            <ChecklistItem id="microservices">Microservices vs Monolith</ChecklistItem>
          </div>
          
          <div className="bg-purple-50 p-3 rounded">
            <h5 className="font-semibold text-purple-800">Sample Questions:</h5>
            <ul className="text-sm text-purple-700 mt-1 space-y-1">
              <li>• Design a simple URL shortener</li>
              <li>• Design a basic chat application</li>
              <li>• How would you design a simple e-commerce system?</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Behavioral Questions" icon={MessageCircle} sectionKey="behavioral">
        <div className="space-y-4">
          <p className="text-gray-600 text-sm">Google values Googleyness - be authentic, show growth mindset, and demonstrate leadership potential.</p>
          
          <div>
            <h4 className="font-semibold mb-2">Prepare STAR Method answers for:</h4>
            <div className="space-y-2">
              <ChecklistItem id="challenge">Tell me about a challenging project you worked on</ChecklistItem>
              <ChecklistItem id="failure">Describe a time you failed and what you learned</ChecklistItem>
              <ChecklistItem id="teamwork">Give an example of working in a team</ChecklistItem>
              <ChecklistItem id="leadership">Tell me about a time you showed leadership</ChecklistItem>
              <ChecklistItem id="conflict">How do you handle disagreements?</ChecklistItem>
              <ChecklistItem id="motivation">Why do you want to work at Google?</ChecklistItem>
              <ChecklistItem id="learning">How do you stay updated with technology?</ChecklistItem>
            </div>
          </div>
          
          <div className="bg-blue-50 p-3 rounded">
            <h5 className="font-semibold text-blue-800">Google-Specific Tips:</h5>
            <ul className="text-sm text-blue-700 mt-1 space-y-1">
              <li>• Show passion for technology and continuous learning</li>
              <li>• Demonstrate problem-solving approach</li>
              <li>• Mention any open-source contributions or personal projects</li>
              <li>• Be ready to discuss your projects in detail</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h3 className="font-bold text-lg mb-2">🎯 Final Preparation Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <ChecklistItem id="resume">Polish your resume with quantifiable achievements</ChecklistItem>
          <ChecklistItem id="projects">Prepare 2-3 projects to discuss in detail</ChecklistItem>
          <ChecklistItem id="questions">Prepare thoughtful questions about Google/role</ChecklistItem>
          <ChecklistItem id="mock">Do mock interviews with friends/online</ChecklistItem>
          <ChecklistItem id="research">Research Google's products and culture</ChecklistItem>
          <ChecklistItem id="practice">Solve 2-3 coding problems daily</ChecklistItem>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">Remember: Google hires for potential, not just current skills. Show your passion for learning and problem-solving! 🚀</p>
      </div>
    </div>
  );
};

export default InterviewPrepGuide;