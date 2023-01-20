import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

export interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
    const {isOpen, onOpen, onClose} = useDisclosure()

  // TODO SELECTED IMAGE URL STATE 
  const [image, setImage] = useState<string>()

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string): void{
    onOpen()
    setImage(url)
  }

  return (
    <>
     <SimpleGrid columns={3} spacing={45} minChildWidth="250px">
      {cards.map((card) => (
          <Card data={card} viewImage={handleViewImage}  key={card.id} />
      ))}
      </SimpleGrid>

      <ModalViewImage imgUrl={image} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
