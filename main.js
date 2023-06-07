const users = [
    {
      first_name: 'Mike',
      last_name: 'Sheridan',
      age: 30
    },
    {
      first_name: 'Tim',
      last_name: 'Lee',
      age: 45
    },
    {
      first_name: 'John',
      last_name: 'Carte',
      age: 25
    }
  ];

  const lastname =users.map (user => user.last_name);
  alert(lastname);

