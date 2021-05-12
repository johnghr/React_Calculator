import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  })

  it('should be able to add', () => {
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('add');
    const button1 = container.getByTestId('number1');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('5')
  })

  it('should be able to subtract', () => {
    const button7 = container.getByTestId('number7');
    const buttonSubtract = container.getByTestId('subtract');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should be able to multiply', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('multiply');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('15');
  })

  it('should be able to divide', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('divide');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should be able to concatenate multiple numbers together', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2);
    fireEvent.click(button1);
    expect(runningTotal).toHaveTextContent('21');
  })

  it('should be able to chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('divide');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonDivide);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('1.5');
  })

})

