import { EmptyCells, Row, Container } from "./styled.ts";
import { Cells } from "../Cells";

interface GridProps {
  currentWord: string;
}

export const Grid = ({ currentWord }: GridProps) => {
  return (
    <Container>
      <Row>
        <EmptyCells>
          <Cells position={0} attempt={0} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={1} attempt={0} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={2} attempt={0} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={3} attempt={0} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={4} attempt={0} correctWord={currentWord}></Cells>
        </EmptyCells>
      </Row>
      <Row>
        <EmptyCells>
          <Cells position={0} attempt={1} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={1} attempt={1} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={2} attempt={1} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={3} attempt={1} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={4} attempt={1} correctWord={currentWord}></Cells>
        </EmptyCells>
      </Row>
      <Row>
        <EmptyCells>
          <Cells position={0} attempt={2} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={1} attempt={2} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={2} attempt={2} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={3} attempt={2} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={4} attempt={2} correctWord={currentWord}></Cells>
        </EmptyCells>
      </Row>
      <Row>
        <EmptyCells>
          <Cells position={0} attempt={3} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={1} attempt={3} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={2} attempt={3} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={3} attempt={3} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={4} attempt={3} correctWord={currentWord}></Cells>
        </EmptyCells>
      </Row>
      <Row>
        <EmptyCells>
          <Cells position={0} attempt={4} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={1} attempt={4} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={2} attempt={4} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={3} attempt={4} correctWord={currentWord}></Cells>
        </EmptyCells>
        <EmptyCells>
          <Cells position={4} attempt={4} correctWord={currentWord}></Cells>
        </EmptyCells>
      </Row>
    </Container>
  );
};
