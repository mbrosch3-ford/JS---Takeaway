describe('Menu', () => {
  it('shows a list of dishes', () => {
    expect(menu.dishes).toEqual({
      Pizza: 10,
      Fish: 20,
      Pasta: 8
    });
  });
});