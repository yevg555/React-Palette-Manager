import React from 'react';
import useAppState from './hooks/useAppState'
import Palette from './Palette';
import NewPaletteForm from "./NewPaletteForm";
import PaletteList from './PaletteList';
import Page from "./Page";
import SingleColorPalette from "./SingleColorPalette";
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FormatProvider, formatContext } from './contexts/formatContext'

export default function App(props) {
  const { palettes, findPalette, deletePalette, savePalette, resetList } = useAppState()
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='page' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path='/palette/new'
                render={routeProps => (
                  <Page>
                    <NewPaletteForm
                      savePalette={savePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path='/palette/:paletteId/:colorId'
                render={routeProps => (
                  <Page>
                    <FormatProvider>
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </FormatProvider>
                  </Page>
                )}
              />
              <Route
                exact
                path='/'
                render={routeProps => (
                  <Page>
                    <PaletteList
                      resetList={resetList}
                      palettes={palettes}
                      deletePalette={deletePalette}
                      {...routeProps}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path='/palette/:id'
                render={routeProps => (
                  <Page>
                    <FormatProvider>
                      <Palette
                        palette={generatePalette(
                          findPalette(routeProps.match.params.id)
                        )}
                      />
                    </FormatProvider>
                  </Page>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  )
}



