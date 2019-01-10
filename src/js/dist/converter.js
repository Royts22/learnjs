import $ from 'jquery';
export default class {

  constructor(rootElement, eur_coeff, usd_coeff) {
    this.rootElement = rootElement;
    this.eur_coeff = eur_coeff;
    this.usd_coeff = usd_coeff;
    this.EUR = 0;
    this.USD = 0;
  }

  render() {
    // detach event listeners
    $('input').off('input');

    // define html 
    let html = `
      <table>
        <tr>
          <td>EUR</td>
          <td>&nbsp;</td>
          <td>USD</td>
        </tr>
        <tr>
          <td><input id="EUR" value="${this.EUR}"/></td>
          <td></td>
          <td><input id="USD" value="${this.USD}" /></td>
       </tr>
      </table>
    `;

    rootElement.innerHTML = html;

    // attach event listeners
    $('#EUR').on('input', () => {
      this.convertEURtoUSD();
    });
    $('#USD').on('input', () => {
      this.convertUSDtoEUR();
    });
  }

  convertEURtoUSD() {
    this.EUR = $('#EUR').val();
    this.USD = this.EUR / this.usd_coeff;
    this.render();
  }

  convertUSDtoEUR() {
    this.USD = $('#USD').val();
    this.EUR = this.USD / this.eur_coeff;
    this.render();
  }

}