export const SQL_FACULTY={
    ALL: 'Select ty.name_type_teacher, te.cod_teacher, te.id_teacher, te.name_teachers, te.lastname_teachers, fa.name_faculty\
     FROM teachers te, type_teacher ty, facultys fa\
     WHERE te.cod_type_teacher = ty.cod_type_teacher and te.cod_faculty = fa.cod_faculty'
}