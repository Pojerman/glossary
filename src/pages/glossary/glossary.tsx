import React, {useEffect, useState} from "react";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import './glossary.css'
import {GlossaryInfo} from "../../const/glossary";

export default function Glossary(): React.JSX.Element {

  const [glossary, setGlossary] = useState<GlossaryInfo[] | null>(null)

  useEffect(() => {
    const getGlossary = async () => {
      try {
        const response = await fetch('http://localhost:5000/glossary');
        const data = await response.json();
        setGlossary(data);
        if(!response.ok) {
          throw new Error('Error')
        }
      } catch (error) {
        console.log(error)
      }
    };

    getGlossary();
  }, [])

  return(
    <>
      <Header/>
      <div className="card-list">
        {glossary?.map((item) => (
            <Card word={item.word} description={item.description} key={item.id}/>
        ))}
      </div>
    </>
  )
}
