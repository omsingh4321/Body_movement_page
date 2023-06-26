import React from 'react'
import Footer from './Footer';
import Quiz from './Quiz';
import style from "./body.module.css"
const Body = () => {
  return (
    <div>
         <div style={{ border: '2px solid black'}}>
         
         <h1 style={{border: '2px solid black', textAlign: 'center' ,margin: '3px',color: 'white',backgroundColor:'#9b51e0',borderRadius:'10px'}}>Types of Body movement</h1>
         <strong style={{fontSize:'30px'}}>Body Movement</strong>
         <div style={{fontSize:'22px'}}>
         Movement is the change in the position of a body part with respect to the whole body. It is one of the significant features of all living beings. The blinking of the eyes, breathing, eating are all examples of movement. So we can say that every second some or the other part of our body exhibits some or other kind of movements.

         The human body movements get polished as we grow in age. The movement starts from crawling and with the increase in age the person starts walking leading to the movement of the whole organism.

         These movements are possible because of joints. Joints are points in our body where two or more parts of our skeleton are connected together. Different joints help our body carry out different activities and movements.

         Listed below are a few types of joints and their functions:
         </div>
         <div style={{marginTop:'3px'}}>
         <div style={{ border: '2px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <table style={{ textAlign:'center',fontSize:'23px',backgroundColor:'rgb(152,150,240)'}}>
    <thead>
      <tr>
        <th colSpan={3} style={{fontSize: '30px'}}>Types of Joints</th>
      </tr>
      <tr>
        <th style={{ border: '2px solid black' }}>Name of the Joint</th>
        <th style={{ border: '2px solid black' }}>Part Of Body Where Found</th>
        <th style={{ border: '2px solid black' }}>Function</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '2px solid black' }}>Ball and Socket Joint</td>
        <td style={{ border: '2px solid black' }}>Hip area, joint of the shoulder</td>
        <td style={{ border: '2px solid black' }}>The rounded end of one bone fits into the cavity of the other bone. It allows movements in all directions</td>
      </tr>
      <tr>
        <td style={{ border: '2px solid black' }}>Pivotal Joint</td>
        <td style={{ border: '2px solid black' }}>Joins the head and neck</td>
        <td style={{ border: '2px solid black' }}>Allows the head to swivel around</td>
      </tr>
      <tr>
        <td style={{ border: '2px solid black' }}>Hinge Joint</td>
        <td style={{ border: '2px solid black' }}>Elbow</td>
        <td style={{ border: '2px solid black' }}>Allows back and forth movement</td>
      </tr>
      <tr>
        <td style={{ border: '2px solid black' }}>Fixed Joint</td>
        <td style={{ border: '2px solid black' }}>Bones in head held with fixed joints</td>
        <td style={{ border: '2px solid black' }}>Help keep bones intact and provides structure</td>
      </tr>
    </tbody>
  </table>
</div>

    <ul style={{fontSize:'23px'}}>
        <li>All bones in our body form a framework and provide shape to our body. This framework is called a skeleton.</li>
        <li>Our hand is made up of several small bones called Carpals.</li>
        <li>Chest bones and backbone together form the ribcage. We have 12 ribs on each side of our chest. Our backbone consists of 33 small, disk-like bones called vertebrae. Rib Cage protects the internal parts of our body and provides a definite structure.</li>
        <li>Bones in the shoulder are called shoulder bones and bones in the abdominal region are called pelvic bones.</li>
        <li>Skull is made up of many bones which are fused together. It protects our brain. Cartilages are also part of our skeletal system and joints of the body. Unlike bones, they are soft and flexible.</li>
        <li>Muscles are subjected to contraction and relaxation and work in pair</li>
    </ul>
    <h1>Locomotion</h1>
    <p style={{fontSize:'23px'}}>Some type of movements result in the change of place, they are termed as locomotion. Walking, cycling. running, and swimming is some of the locomotory movements.

There are different types of locomotory movements in different organisms like paramecium have cilia which help in capturing food and also in locomotion. Hydra has tentacles for capturing prey and for locomotion. We use our limbs for different types of body movements. Locomotion is necessary for food, shelter etc.</p>
    <h1>Amoeboid Movements</h1>
    <p style={{fontSize:'23px'}}>Some cells of our body like the white blood cells exhibit amoeboid movement. Cytoskeletons and microfilaments are also involved in this type of movement.

Some of our internal tubular organs exhibit ciliary movement. Cilia are present in our trachea which helps in removing foreign particles, dust etc. The movement of ova in the female reproductive tract is also a type of ciliary movement.

Whenever we move, our limbs are involved. They are the muscular movements. In locomotion and other types of body movements in humans, the contractile property of the muscles is used.

Movements involve perfect coordination of the muscular, skeletal and neural system. There are a variety of muscles and joints involved in movements.</p>

                
         </div>
    </div>

    </div> 
  )
}

export default Body
