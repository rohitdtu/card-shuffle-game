import React from 'react';
import renderer from 'react-test-renderer';
import LeftDeck from '../../src/components/GamePlayground/LeftDeck/leftDeckkk

describe('LeftDeck', () => {
  test('snapshot renders', () => {

    const mockData = [
        { number: 1, id: "1", deck: "A" },
        { number: 2, id: "2", deck: "A" },
        { number: 3, id: "3", deck: "A" },
        { number: 4, id: "4", deck: "A" },
        { number: 5, id: "5", deck: "A" },
        { number: 6, id: "6", deck: "A" },
        { number: 7, id: "7", deck: "A" },
        { number: 8, id: "8", deck: "A" },
        { number: 9, id: "9", deck: "A" }
    ];
    const component = renderer.create(<LeftDeck data={mockData}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});