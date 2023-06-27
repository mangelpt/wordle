import {EmptyCells, Row, Container} from "./styled.ts";
import {BoardCells} from "../Cells";

export const Grid = () => {
    return <Container>
        <Row>
            <EmptyCells>
                <BoardCells position={0} attempt={0}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={1} attempt={0}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={2} attempt={0}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={3} attempt={0}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={4} attempt={0}></BoardCells>
            </EmptyCells>
        </Row>
        <Row>
            <EmptyCells>
                <BoardCells position={0} attempt={1}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={1} attempt={1}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={2} attempt={1}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={3} attempt={1}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={4} attempt={1}></BoardCells>
            </EmptyCells>
        </Row>
        <Row>
            <EmptyCells>
                <BoardCells position={0} attempt={2}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={1} attempt={2}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={2} attempt={2}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={3} attempt={2}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={4} attempt={2}></BoardCells>
            </EmptyCells>
        </Row>
        <Row>
            <EmptyCells>
                <BoardCells position={0} attempt={3}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={1} attempt={3}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={2} attempt={3}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={3} attempt={3}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={4} attempt={3}></BoardCells>
            </EmptyCells>
        </Row>
        <Row>
            <EmptyCells>
                <BoardCells position={0} attempt={4}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={1} attempt={4}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={2} attempt={4}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={3} attempt={4}></BoardCells>
            </EmptyCells>
            <EmptyCells>
                <BoardCells position={4} attempt={4}></BoardCells>
            </EmptyCells>
        </Row>
    </Container>
}