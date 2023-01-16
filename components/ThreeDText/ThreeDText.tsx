'use client'
import React, { useRef, useState ,useLayoutEffect} from 'react'
import { Canvas, ThreeElements, useFrame, } from '@react-three/fiber'
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import myFont from './Varela_Round_RegularJSON.json'
import { NoToneMapping, Vector3 } from 'three'
extend({ TextGeometry })

 function Box(props: ThreeElements['mesh'] & {text: string, randomize: () => void, color: [number, number, number]}) {
    const ref = useRef<THREE.Mesh>(null!)
    const groupRef = useRef<THREE.Group>(null!)


    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    const axis = new Vector3(0, props.text.length/2, 0); 
    const angle=Math.PI/2;



    useLayoutEffect(() => {

      ref?.current.position.set(-props.text.length/(Math.PI/2), 0, 0.02);
    
    }, [])
    
const font = new FontLoader().parse(myFont);
    useFrame((state, delta) => {
      groupRef.current.rotation.y += delta
      // TODO figure out how to change color programmatically
      // ref.current.material?.color.setRGB([0,0,Math.floor(Math.random()*255)]);
    })
    
    return (
      <group ref={groupRef}>

      <mesh
        {...props}
        ref={ref}
        scale={.25}
        onClick={props.randomize}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        
        >
          {/* @ts-expect-error textGeometry is not defined */}
        <textGeometry args={[props.text, {font, size:5, height: 1}]}/>       
        <meshLambertMaterial attach='material' reflectivity={0} color={props.color}/>
      </mesh>
          </group>
    )
  }

export default function ThreeDText({text = 'example'}: {text: string;}){
  
  const [color, setColor] = useState<[number, number, number]>([255,255,255])
  const randomize = () => {
    const newColor: [number,number,number] = [
      Math.floor(Math.random()*255),
      Math.floor(Math.random()*255),
      Math.floor(Math.random()*255)
    ]
    console.log(newColor);
    
    setColor(newColor);
  }
  return (
    <Canvas gl={{toneMapping: NoToneMapping}} camera={{
      fov: 10,
      castShadow: true,
      position: [0,0,20]
    }}>
      <Box randomize={randomize} color={color} text={text} />
      <pointLight position={[0,30,50]}  color={color}/>
    </Canvas>
  )
}