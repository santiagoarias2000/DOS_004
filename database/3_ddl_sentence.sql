SELECT d.cod_type_teacher,
CASE cod_type_teacher
WHEN 1 THEN 'decano'
WHEN 2 THEN 'Docente tituilas'
WHEN 3 THEN 'Docente Asociado'
WHEN 4 THEN 'Docente Asistente'
WHEN 5 THEN 'Docente auxiliar'
WHEN 6 THEN 'otro'
END 
FROM teachers d
INNER JOIN facultys f 
on f.cod_faculty = d.cod_faculty