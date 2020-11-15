const idTrigger =
  `CREATE TRIGGER before_insert_documents BEFORE INSERT ON documents FOR EACH ROW BEGIN SET new.id = REPLACE(UUID(),'-',''); END;`;

module.exports = idTrigger;
