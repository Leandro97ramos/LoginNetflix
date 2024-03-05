//validar el formulario

const inputs = document.querySelectorAll('.inp');
const labels = document.querySelectorAll(".lbl");

console.log(inputs);

const verificarInputs = () => {
  console.log('Verificando inputs');
  inputs.forEach((input, index) => {
    if (input.value.length > 0) {
      labels[index].classList.add('remove');
      labels[index].classList.remove('active');
    } else {
      labels[index].classList.add('active');
      labels[index].classList.remove('remove');
    }
  });
};

// Agregar eventos a los inputs
inputs.forEach(input => {
  input.addEventListener('keyup', verificarInputs);
  input.addEventListener('blur', verificarInputs);
});




verificarInputs();