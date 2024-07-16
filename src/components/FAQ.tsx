import React, { useState } from 'react';

type FAQData = {
  [key: string]: string | { title: string; content: string[] }[];
};

const faqData: FAQData = {
  'From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.': [
    {
      title: 'Top 5 Favorites',
      content: [
        'Work with engineering teams during incidents and provide updates to internal and external stakeholders - I like being able to control vital incidents . By dealing with engineers, it’s easier to help each other solve any issue quickly enough . Providing updates to stalkholders creates an understanding atmosphere and transparency , particularly in moments of tension . I am good at staying calm when things are tough and I also have strong communication abilities as well as the ability to cooperate with others effectively ,these help me to perform this task effectively .',
        'Work with third party partners to track down a tricky situation for a joint customer - I love to assist third-party partners in solving their customer’s problems. I derive motivation from doing detective work and problem-solving. Effective communication abilities as well as negotiation prowess are essential ingredients in this role. My delight comes from finding solutions that benefit everyone while at the same time cementing relationships between us',
        'Manage a support team - When I manage a support team, I can mentor and improve the careers of other professionals. I lead by example and create a working environment that is characterized by teamwork and support. Through it too, I can establish techniques and plans that enhance the team’s efficiency levels and customer satisfaction rate. Additionally, it gives me the chance to directly contribute to the career advancement of persons in my team something I find deeply rewarding.',
        'Write and maintain support articles and doc pages - One of my favorite activities is developing support documentation because it allows me to spread information and educate clients to deal with problems on their own. I document complex problem solving techniques into plain directions that anyone can follow easily. In this way support tickets will decrease and customers’ satisfaction levels will go up as they have free guidance resources.',
        'Analyze hundreds of support tickets to spot trends the product team can use - Going through support tickets to find trends is something I enjoy because it makes me think and it impacts something. By spotting patterns or common problems, it gives the product team some good ideas for growth. A strategy that can be used to improve this product thereby reducing future customer inquiries. My communication skills, problem-solving abilities, team leadership competence, writing capacity and data interpretation talent is what comes out most in this endeavor.',
      ],
    },
    {
      title: 'Top 5 Least Favorites',
      content: [
        'Respond to queries on Twitter, Reddit, Hacker News and other third-party sites - Even though it is necessary to engage with consumers through social media and other external websites, I don’t feel it is very fulfilling for me mainly because these channels tend to be too risky and chatting on them is often without order. Due to their fast, ever-changing atmospheres, such platforms might sometimes require concise rather than detailed answers. Moreover, in some cases users’ identities are unknown resulting in loss or negative conversations that may drain much needed energy.',
        'Run ticket review sessions to make sure tone is consistent -It\'s important to maintain a consistent tone when dealing with support subjects. However reviews are boring repetitive tedious. In addition to that job entails paying very close attention, but at the same time it can also become quite boring since it becomes necessary to observe much detail on it. In my opinion, I love tasks which require solving problems head on or thinking strategically as opposed to those that focus more on procedures like making sure that voices are consistent.',
        'Scheduling time-off coverage and collaborating as part of a growing cohesive support team - Although collaboration is important, it can be challenging to organize time-off coverage because there are often competing availability and preferences. In some situations, this might take a long time and derail us from doing other things like helping clients or enhancing the support system. Even as a team expands, striking the crucial balance between morale and efficiency may sometimes prove a problem.',
        'Help resolve billing issues for customers - Dealing with complex and sensitive billing issues involves in-depth investigations into disputes arising from the billings, action on payment failures or incorrect charges, and dealing with dissatisfied customers. It is handling billing adjustment where they consider any necessary compensation strategies that could be applicable .',
        'Find and recruit teammates for the support team - The process of hiring new team members is very important, but it’s not very stimulating for me because there’s so much administrative work and time required. My main duties are often neglected by going through resumes, interviewing candidates, and dealing with other aspects pertaining to the recruitment exercise. I often feel more fulfilled when I’m assisting clients directly and improving our customer service system instead of hiring new employees.',
      ],
    },
  ],
  'What do you want to learn or do more of at work?': 'I am passionate and excited about the realms of serverless computing and edge computing. I want a team that knows how to innovate upon itself while also being open to contributions from anyone interested. I love integrating processes so that tasks are completed quickly without compromising quality, thus making clients feel considered and taken care of but I would be eager to take part in creating interior tools that give strength to support engineers still keeping the focus on customers. Intellectual curiosity, creativity and personal drive all are combined in me to find completely different ways out via cooperation, knowledge sharing and teamwork within such systems.',
  'Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?' : 'In my previous role , there has been a continuing problem that the application slows down with more users coming into play. To figure out what the actual problem was, I engaged the software developers which required measuring server logs and how well the system performed related to particular criteria. The personnel detected that there were inefficiencies in the database queries. I suggested some ways and enacted some optimized queries alongside caching approaches. In order to ascertain whether they were successful or not, we employed APM tools for checking the system efficiency afterwards.The solution was successful as we observed a 40% reduction in response time and improved stability during peak traffic periods.',
  'When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?': [
    {
      title: 'Edge Functions',
      content: [
        'Edge Functions are perfect for instances where processing speeds needs to be faster such as dynamic content personalization based on where someone is located or testing out new features . Thus they are right beside the users for super quick running.'
      ],
    },
    {
      title: 'Serverless Functions',
      content: [
        'Serverless Function is perfect for backend tasks that do not need to run continuously like form submission processing,database operations, user account management, social network functionalities which require fast deployment and offering a cost-effective solution.'
      ],
    },
    {
      title: 'Edge Middleware',
      content: [
        'Edge Middleware  is a feature that allows you to modify requests and responses at the edge, for example by adding security headers, doing redirects, or authenticating/authorizing logic ahead of hitting the server. It provides a robust approach to performance and security enhancement at the edge.'
      ],
    },
  ],
  'Imagine a customer writes in requesting help with a build issue on a framework or technology that you\'ve not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?': 
  [
    {
      title: 'I would request that the customer provide detailed information about the issue to deep dive into the case . ',
      content: [
        'The exact error messages or logs they encounter.',
        'Any relevant documentation about the framework you\'re using this could provide valuable clues.',
        'The steps they followed encountering this issue.',
        'The specific version of such a framework or technology that they are using.',
        'Any relevant configuration files or code snippets.',
        'What recent changes or updates might have been made on their project which could be the cause as well.',
        'All this would enable me understand the context as well as reproduce it which is crucial for effective troubleshooting.',
      ],
    },
  ],
  'The customer from question 5 replies to your response with the below: \n \"I am so frustrated. I\’ve been trying to make this work for hours and I just can\’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions\". Please write a follow-up reply to the customer.': 
  [
    {
      title: 'Suggested Response',
      content: [
        'Hi [Customer name],',
        'I apologize for the inconvenience you are facing. It is possible for us to arrive at the cause of that problem easier and more accurately if we receive the necessary data. Usually, it’s about a certain setup or a recent change in the code. Please assist us so that we can find solutions more quickly and resolve this problem. We will help you as best as we can..',
        'Regards',
        'Vishal Srivastava'
      ],
    },
  ],
  'A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path to https://example.com?" Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.'
  :
  [
    {
      title: 'Decision Making -- This solution provides a clear and concise step-by-step guide, leveraging Vercel\'s built-in redirect functionality for a user-friendly experience.',
      content: [
        'Hi [Customer name],',
        'It’s easy to create a redirect from the /blog path to https://example.com using Vercel. Here\'s how',
        'Visit Vercel project settings. Here, you’ll be able to see the “All” tab.',
        'Select the “Redirects” option below it.',
        'Click on the “Add Redirect” button right next to it.',
        'Fill in “/blog” under “From”.',
        'On the other hand, in the “To” section, insert https://example.com (check that your address has HTTPS to ensure it is secure).',
        'Finish up by clicking \“Save\” ',
        'Regards',
        'Vishal Srivastava',

      ],
    },
  ],
  'A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.':
  [
    {
      title: '',
      content: [
        'Hi [Customer Name]',
        'There are some methods by which a site can be prevented from being indexed by search engines in Vercel.', 
        'One of them includes :',
        'Creating a \‘robots.txt\’ file within your project root that contains the text below \\n',
        'User-agent: * Disallow: //',
        'All pages on that web page should not be indexed when this file is present. /n',
        'Vercel\'s built-in setting for a simpler option :',
        'We should click into the deployment tab of project settings under search engine optimization where there’s an option called No Indexing.',
        'If you need further assistance or have any questions, please let me know.',
        'Best regards\,',
        'Vishal Srivastava',
      ]
    }
  ],
  'What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?':
  [
    {
      title: '',
      content: [
        'It is common that deployment problems occur, like incorrect configurations and build failures.',
        'Short-term fix: Give step-by-step guides and detailed documentation that will aid in sorting out ordinary deployment issues. To rapidly address urgent matters, provide online help through chat or email.',
        'Long-term Fix : Create and maintain a full knowledge database containing solutions to problems frequently faced. Design automated tools for spotting and rectifying common deployment hitches before reaching clients. Organize recurrent online seminars and educational courses aimed at teaching clients how to deploy and configure properly.'
      ],
    }
  ],
  'How could we improve or alter this familiarisation exercise?':'The exercise provides a good overview of technical skills and troubleshooting approaches.  Perhaps including a scenario where collaboration with other Vercel teams (e.g., engineering) is required could showcase teamwork and communication abilities.', 
};

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{ padding: '2rem' }}>
      {Object.entries(faqData).map(([question, answer], index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => toggleFAQ(index)}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'left',
              background: 'none',
              border: '1px solid #007BFF',
              cursor: 'pointer',
              fontSize: '1rem',  // Same font size as answers
              fontWeight: 'bold',  // Make the question bold
            }}
          >
            {question}
          </button>
          {index === activeIndex && (
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#e7f3ff',
                border: '1px solid #007BFF',
                borderTop: 'none',
                fontSize: '1rem',  // Same font size as the question
              }}
            >
              {Array.isArray(answer) ? (
                answer.map((section, i) => (
                  <div key={i}>
                    <h2 style={{ fontWeight: 'bold' }}>{section.title}</h2>
                    <ol>
                      {section.content.map((item, j) => (
                        <li key={j} style={{ marginBottom: '0.5rem' }}>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))
              ) : (
                <p>{answer}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
