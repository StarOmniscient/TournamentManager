import React, { useState, useEffect } from "react";
import Calls from "../calls.js";
import Plus4U5App from "uu_plus4u5g02-app";
import {useRoute} from "uu5g05";


export default function TournamentsPage() {
  const [tournaments, setTournaments] = useState([]);
  const [route, setRoute] = useRoute();

  
  useEffect(() => {
    async function fetchTournaments() {
      try {
        const response = await Calls.listTournaments();
        setTournaments(response.itemList);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    }
    fetchTournaments();
  }, []);

  return (
    <div>
      <h2>Tournaments</h2>
      {tournaments.length === 0 ? (
        <p>No tournaments available.</p>
      ) : (
      <ul>
        {tournaments.map((tournament) => (
        <div onClick={
        () => {
            setRoute('tournamentDetail', {id: tournament.id});
        }
    } key={tournament.id}>
          <li key={tournament.id}>
            <h3>{tournament.name}</h3>
            <p>{tournament.description}</p>
            <p>
              Start Date: {tournament.startDate} | End Date: {tournament.endDate}
            </p>
            <p>Status: {tournament.status}</p>
            <p>Team Size: {tournament.teamSize}</p>
          </li>
            </div>
        ))}
      </ul>
        )}
    </div>
    )}