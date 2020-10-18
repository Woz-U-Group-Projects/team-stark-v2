package com.example.groupproject.models;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.groupproject.models.Biller;

//Configure Spring application to communicate MySQL DB & store user information
//All authentication & authorization code artifacts are in this package
//Start by creating a Biller class & a BillerRepository interface
public interface BillerRepository extends JpaRepository<Biller, Long> {


}
